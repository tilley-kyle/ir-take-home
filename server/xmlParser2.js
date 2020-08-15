const xmlParser2 = (req, res, xml) => {
  const startIndex = xml.indexOf('?>') + 3;
  const parsedObject = {};

  const recurosr = (xmlString) => {
    console.log('start: ', xmlString);
    console.log('****************************************');
    if (xmlString.indexOf('/') === 1) { //check to see if we're at a closing tag location, if so move to the next opening tag
      xmlString = xmlString.slice(xmlString.slice(2).indexOf('<') + 1);
      recurosr(xmlString);
    } else if (xmlString[0] === '<') {
      xmlString = xmlString.slice(1);
      const endOfTag = ((xmlString.indexOf(' ') < xmlString.indexOf('<')) && xmlString.indexOf(' ') > -1) ? xmlString.indexOf(' ') : xmlString.indexOf('<');
      const tag = xmlString.slice(0, endOfTag);
      console.log('tag: ', tag)
    }
  }

  recurosr(xml.slice(startIndex));
}

module.exports = xmlParser2;