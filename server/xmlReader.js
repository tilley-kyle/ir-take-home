const fs = require('fs');
const xmlParser = require('./xmlParser2');
const fileLocation = './server/testxmls/singleLevel.xml';

const xmlReader = (req, res) => {
  fs.readFile(fileLocation,'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      xmlParser(req, res, data);
    }
  });
}

module.exports = xmlReader;