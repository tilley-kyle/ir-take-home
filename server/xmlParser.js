const fs = require('fs');

const xmlParser = (req, res) => {
  fs.readFile('server/status.xml','utf8', (err, data) => {
    for (const i of data) {
      console.log(i)
    }
  })
}

module.export = xmlParser;