const fs = require('fs');
const xmlParser = require('./xmlParser');
const fileLocation = './server/status.xml';
const parseString = require('xml2js').parseString;

const xmlReader = (req, res) => {
  fs.readFile(fileLocation,'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      parseString(data, (err, result) => {
        res.status(200).send(result);
      });
    }
  });
}

module.exports = xmlReader;