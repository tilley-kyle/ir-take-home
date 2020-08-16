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
        let innerTag = innerString.slice(1, innerString.indexOf('>'));
        if (innerTag.indexOf(' ') > -1) {
          innerTag = innerTag.slice(0, innerTag.indexOf(' '));
        }
        innerString = innerString.slice(0, innerString.indexOf(`</${innerTag}`) + innerTag.length + 3);
        obj[tag] = { [innerTag]: recursor(innerString, obj)}
      } else if (xmlString.slice(tag.length + 2).indexOf('\n') !== 0) {
        return 'hi';

      }
    }
  }

  recursor(xml, parsedData);
  console.log(parsedData)
}

module.exports = xmlParser;