const xmlParser = (req, res, xml) => {
  const parsedData = {};
  const tagsToSearchFor = ['SystemUnit', 'Peripherals', 'Cameras', 'Call', 'Network', 'Capabilities', 'SystemTime', 'ContactInfo', 'Status'];



  let startIndex = xml.indexOf('?>') + 1;
  const recursorFunction = (xmlString, obj) => {

  }

  recursorFunction(xml, parsedData);
  console.log(parsedData);
}

module.exports = xmlParser;