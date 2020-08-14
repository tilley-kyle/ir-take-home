const xmlParser = (req, res, xml) => {
  const parsedData = {};
  const tagsToSearchFor = ['SystemUnit', 'Peripherals', 'Cameras', 'Call', 'Network', 'Capabilities', 'SystemTime', 'ContactInfo'];
  const startIndex = xml.indexOf('?>') + 1;

  const recursorFunction = (xmlString, obj, currentParentTag) => {
    let tag = '';
    for (let i = 0; i < xmlString.length; i++) {
      //if CE is < create new key in obj through next >
      if (xmlString[i] === '<' && xmlString[i + 1] !== '/') {
        const endOfTag = xmlString.slice(i).indexOf('>');
        tag = xmlString.slice(i + 1, endOfTag + i);
        i += endOfTag; //takes the function out of the closing > of the tag
        console.log(xmlString[i])
      }

      //if CE is > AND next element IS NOT < set following values till next < to the value of key
      else if (xmlString[i - 1] === '<') {
        // console.log(i, ':', xmlString[i])
        const endOfProperty = xmlString.slice(i).indexOf('<');
        const propertyValue = xmlString.slice(i + 1, endOfProperty + 1);
        obj[tag] = propertyValue;
        console.log('prop: ', endOfProperty)
      }
      //if CE is > AND next element IS <, call recursor function
      //if CE is / AND next element IS > return out of recursor
    }
    console.log(obj)
  }

  recursorFunction(xml.slice(startIndex), parsedData, '');
}

module.exports = xmlParser;