const xmlParser = (req, res, xml) => {
  const parsedData = {};
  const startIndex = xml.indexOf('?>') + 1;

  const recursorFunction = (xmlString, obj, currentParentTag) => {
    let tag = '';
    for (let i = 0; i < xmlString.length; i++) {
      //if CE is < create new key in obj through next >
      if (xmlString[i] === '<' && xmlString[i + 1] !== '/') {
        const endOfTag = xmlString.slice(i).indexOf('>');
        tag = xmlString.slice(i + 1, endOfTag + i);
        i += endOfTag; //takes the function out of the closing > of the tag
      }

      //if CE is > AND next element IS NOT < set following values till next < to the value of key
      else if (xmlString[i - 1] === '>' && tag) {
        const endOfProperty = (xmlString.slice(i)).indexOf('</') + i;
        let propertyValue = xmlString.slice(i, endOfProperty);
        while (propertyValue.indexOf('\n') > -1) {
          if (propertyValue.indexOf('\n') === 0) {
            propertyValue = propertyValue.slice(1);
          } else {
            console.log(propertyValue.indexOf('\n'), propertyValue.length)
            console.log('hey 1,', propertyValue)
            propertyValue = propertyValue.slice(0, propertyValue.indexOf('\n'));
            console.log('hey 2,', propertyValue)
          }
          // console.log('hello', propertyValue)
        }
        obj[tag] = propertyValue;
      }
      //if CE is > AND next element IS <, call recursor function
      else if (xmlString[i] === '>' && xmlString[i + 1] === '<') {
        console.log('bad program')
      }
      //if CE is / AND next element IS > return out of recursor
    }
  }
  console.log(parsedData)
  recursorFunction(xml.slice(startIndex), parsedData, '');
  console.log(parsedData)
}

module.exports = xmlParser;