const xmlParser2 = (req, res, xml) => {
  const startIndex = xml.indexOf('?>') + 3;
  const parsedObject = {};

  const recursor = (xmlString, currentKey, obj) => {
    console.log('****************************************');
    console.log('currKey: ', currentKey)
    console.log('start: ', xmlString);
    console.log('****************************************');
    if (xmlString.indexOf('/') === 1 ) { //check to see if we're at a closing tag location, if so move to the next opening tag
    console.log('closing tag')
      if (xmlString.slice(2).indexOf('<') === -1) { //check if there are no more opening tags, if not returns out of function
        return;
      }
      xmlString = xmlString.slice(xmlString.slice(2).indexOf('<') + 2);
      recursor(xmlString, currentKey, obj);
    } else if (xmlString[0] === '<') { //if beginning of tag, save that value and recurse back into fucntion
      xmlString = xmlString.slice(1);
      const endOfTag = ((xmlString.indexOf(' ') < xmlString.indexOf('>')) && xmlString.indexOf(' ') > -1) ? xmlString.indexOf(' ') : xmlString.indexOf('>');
      const tag = xmlString.slice(0, endOfTag);
      obj[tag] = recursor(xmlString.slice(xmlString.indexOf('>') + 1), tag, obj);
    } else if (xmlString[0]  !== '<') {
      return xmlString.slice(0, xmlString.indexOf('<'));

    }

  }

  recursor(xml.slice(startIndex), '', parsedObject);
  console.log(parsedObject)
}

module.exports = xmlParser2;