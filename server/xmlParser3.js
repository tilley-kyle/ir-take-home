const xmlParser = (req, res, xml) => {
  const parsedData = {};
  xml = xml.slice(xml.indexOf('?>') + 3);


  const recursor = (xmlString, obj) => {

    for (let i = 0; i < xmlString.length; i++) {
      //if we're at the base level (value is right after key) set tag = value
      //else if there is a nested tag, set  obj[tag] = recursor
      //just be baller
      if (xmlString[i] === '<' && xmlString[i + 1] !== '/') {
        const endOfTag = xmlString.indexOf('>');
        const tag = xmlString.slice(i + 1, endOfTag);
        i = endOfTag + 1;
        if (xmlString[i] !== '<') {
          const startOfValue = i;
          const value = xmlString.slice(startOfValue, xmlString.slice(startOfValue).indexOf('<') + i);
          console.log('value: ', value)
          obj[tag] = value;
        }
      }
    }
  }

  recursor(xml, parsedData);
  console.log(parsedData)
}

module.exports = xmlParser;