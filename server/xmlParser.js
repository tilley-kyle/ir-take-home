const xmlParser = (req, res, xml) => {
  const parsedData = {};
  const tagsToSearchFor = ['SystemUnit', 'Peripherals', 'Cameras', 'Call', 'Network', 'Capabilities', 'SystemTime', 'ContactInfo', 'Status'];
  const startIndex = xml.indexOf('?>') + 1;

  const recursorFunction = (xmlString, obj, currentParentTag) => {
    for (let i = 0; i < xmlString.length; i++) {
      //if CE is < create new key in obj through next >
      if (xmlString[i] === '<') {
        const endOfTag = xmlString.slice(i).indexOf('>');
        const tag = xmlString.slice(i + 1, endOfTag + i);
      }
      //if CE is > AND next element IS NOT < set following values till next < to the value of key
      //if CE is > AND next element IS <, call recursor function
      //if CE is / AND next element IS > return out of recursor
    }
  }

  recursorFunction(xml.slice(startIndex), parsedData, '');
}

module.exports = xmlParser;