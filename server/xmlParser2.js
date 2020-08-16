const xmlParser2 = (req, res, xml) => {
  const startIndex = xml.indexOf('?>') + 3;
  const parsedObject = {};

  const recursor = (xmlString, currentKey, obj) => {
    console.log('****************************************');
    console.log('currKey: ', currentKey)
    console.log('start: ', xmlString);
    console.log('obj: ', obj)
    // console.log('****************************************');
    if (xmlString.indexOf('/') === 1 ) { //check to see if we're at a closing tag location, if so move to the next opening tag
    console.log('closing tag')
      if (xmlString.slice(2).indexOf('<') === -1) { //check if there are no more opening tags, if not returns out of function
        return;
      }
      xmlString = xmlString.slice(xmlString.slice(2).indexOf('<') + 2);
      recursor(xmlString, currentKey, obj[currentKey]);
    } else if (xmlString[0] === '<') { //if beginning of tag, save that value and recurse back into fucntion
      console.log('beginning tag')
      xmlString = xmlString.slice(1);
      const endOfTag = ((xmlString.indexOf(' ') < xmlString.indexOf('>')) && xmlString.indexOf(' ') > -1) ? xmlString.indexOf(' ') : xmlString.indexOf('>');
      const tag = xmlString.slice(0, endOfTag);
      let newXMLString = (xmlString.slice(xmlString.indexOf('>') + 1));
        if (newXMLString.indexOf('\n') === 0) {
          newXMLString = newXMLString.slice(newXMLString.indexOf('<'));
        }
      obj[tag] = recursor(newXMLString, tag, obj);
    } else if (xmlString[0]  !== '<') { //this is the value of the most recent tag
      console.log('values')
      return xmlString.slice(0, xmlString.indexOf('<'));

    }

  }
  console.log('****************************************');
  recursor(xml.slice(startIndex), '', parsedObject);
  console.log(parsedObject)
}

module.exports = xmlParser2;