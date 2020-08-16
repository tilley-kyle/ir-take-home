const xmlParser = (req, res, xml) => {
  const parsedData = {};
  xml = xml.slice(xml.indexOf('?>') + 3);


  const recursor = (xmlString, obj) => {

    for (let i = 0; i < xmlString.length; i++) {
      const tag = xmlString.slice(1, xmlString.indexOf('>'));
      console.log(xmlString.slice(tag.length + 2).indexOf('\n') === 0)
      if (xmlString.slice(tag.length + 2).indexOf('\n') === 0) { //if there is nested layer
        let innerString = xmlString.slice(tag.length + 2);
        innerString = innerString.slice(innerString.indexOf('<'));
        let innerTag = innerString.slice(1, innerString.indexOf('>'));
        if (innerTag.indexOf(' ') > -1) {
          innerTag = innerTag.slice(0, innerTag.indexOf(' '));
          console.log('inner: ', innerTag)
        }
        innerString = innerString.slice(0, innerString.indexOf(`</${innerTag}`) + innerTag.length + 3);
        console.log('new: ', innerString)
        obj[tag] = 'not ready'
      }
      // if (xmlString.slice(i).indexOf('\n') === 0) {
      //   console.log('there')
      // }
    }
  }

  recursor(xml, parsedData);
  console.log(parsedData)
}

module.exports = xmlParser;