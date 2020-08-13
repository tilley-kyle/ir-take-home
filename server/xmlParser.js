const fs = require('fs');

const fileLocation = './server/test.xml';

const xmlParser = (req, res) => {
  fs.readFile(fileLocation,'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).send(err);
    }
    const informationNames = {};
    let questionMarkCount = 0;
    const xmlParserRecursor = (xmlString, currTag, currObj) => {
      let tagString = '';
      let contentString = '';
      for (let i = 0; i < xmlString.length; i++) {
        if ((questionMarkCount < 2)) {
          if (xmlString[i] === '?') {
            questionMarkCount++;
          }
          continue;
        }
        if (xmlString[i - 1] === '>') {

        } else if (xmlString[i] === '<' && xmlString[i + 1] !== '/') {
          i++;
          while (xmlString[i] !== '>') {
            tagString += xmlString[i];
            i++;
          }
        }

      }

      console.log(tagString, contentString);

    }

    xmlParserRecursor(data, '', informationNames);
  })
}

module.exports = xmlParser;