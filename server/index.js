const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const xmlReader = require('./xmlReader.js');

const app = express();

app.use(cors());
app.use(bp.json());
app.use(express.static('build'));

const port = 8153;

app.listen(process.env.PORT || port, () => console.log('listening'));

app.get('/data', xmlReader); //going to be get route on componentDidMount in the React app



