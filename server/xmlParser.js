const xmlParser = (req, res, xml) => {
  const parsedData = {};
  const startIndex = xml.indexOf('?>') + 2;

  const recursorFunction = (xmlString, obj, currentParentTag) => {
    let tag = '';
    const object = {};
    for (let i = 0; i < xmlString.length; i++) {

      if (xmlString[i] === ' ') {
        continue;
      }

      //if CE is < create new key in obj through next >
      if (xmlString[i] === '<' && xmlString[i + 1] !== '/') {
        const endOfTag = xmlString.slice(i).indexOf('>');
        tag = xmlString.slice(i + 1, endOfTag + i);
        i += endOfTag; //takes the function out to the closing > of the tag
      }

      //if CE is > AND next element IS <, call recursor function
      else if (xmlString.slice(i).indexOf('\n') === 0 && xmlString[i - 1] === '>') {
        i += xmlString.slice(i).indexOf('<');
        if (xmlString[i + 1] !== '/') {
          // console.log('i: ', i);
          // console.log('*******')
          // console.log('tag: ', tag)
          // console.log('*******')
          // console.log(xmlString.slice(i));
          // console.log('********')
          // console.log('obj: ', obj)
          obj[tag] = recursorFunction(xmlString.slice(i), obj, tag)
        }
      }

      //if CE is > AND next element IS NOT < set following values till next < to the value of key
      else if (xmlString[i - 1] === '>' && tag) {
        const endOfProperty = (xmlString.slice(i)).indexOf('<') + i;
        let propertyValue = xmlString.slice(i, endOfProperty);
        while (propertyValue.indexOf('\n') > -1) {
          if (propertyValue.indexOf('\n') === 0) {
            propertyValue = propertyValue.slice(1);
          } else {
            propertyValue = propertyValue.slice(0, propertyValue.indexOf('\n'));
          }
        }
        return obj[tag] = propertyValue;
        i = endOfProperty - 1; //last value of the property, the last level
        return;
      }

      //if CE is / AND next element IS > return out of recursor
    }
  }
  recursorFunction(xml.slice(startIndex), parsedData, '');
  console.log('final: ', parsedData)
}

module.exports = xmlParser;