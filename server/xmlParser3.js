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
        console.log('tag: ', tag);
        i += endOfTag + 1;
        if (xmlString.slice(i).indexOf('\n') === 0) {
          i += xmlString.slice(i).indexOf('<');
          obj[tag] = { tag: recursor(xmlString.slice(i), obj) };
        } else if (xmlString.slice(i).indexOf('\n') !== 0) {
          obj[tag] =   xmlString.slice(i, xmlString.slice(i).indexOf('<') + i);;
        }
      }
    }
  }

  recursor(xml, parsedData);
  console.log(parsedData)
}

module.exports = xmlParser;