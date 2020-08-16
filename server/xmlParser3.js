const xmlParser = (req, res, xml) => {
  const parsedData = {};
  xml = xml.slice(xml.indexOf('?>') + 3);


  const recursor = (xmlString, obj) => {
    const tag = xmlString.slice(1, xmlString.indexOf('>'));

    for (let i = 0; i < xmlString.length; i++) {
      // const tag = xmlString.slice(1, xmlString.indexOf('>'));
      if (xmlString.slice(tag.length + 2).indexOf('\n') === 0) { //if there is nested layer
        let innerString = xmlString.slice(tag.length + 2);
        innerString = innerString.slice(innerString.indexOf('<'));
        const innerTag = innerString.slice(1, innerString.indexOf('>'));
        let innerTagEnd = innerString.slice(1, innerString.indexOf('>'));
        if (innerTag.indexOf(' ') > -1) { //checking for spaces in tag that would make closing tag harder to find
          innerTagEnd = innerTag.slice(0, innerTag.indexOf(' '));
        }
        innerString = innerString.slice(0, innerString.indexOf(`</${innerTagEnd}`) + innerTagEnd.length + 3);
        obj[tag] = { [innerTag]: recursor(innerString, obj)}
      } else if (xmlString.slice(tag.length + 2).indexOf('\n') !== 0) { //if this is the lowest layer to put data in
        const endOfTag = xmlString.slice(tag.length + 2).indexOf('</');
        return xmlString.slice(tag.length + 2, endOfTag + tag.length + 2);
      }
    }
  }

  recursor(xml, parsedData);
  console.log(parsedData)
}

module.exports = xmlParser;