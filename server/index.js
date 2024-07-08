const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const getSentimentAnalysis = require('./api');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

const port = 8081;
app.listen(port, function () {
  console.log(`Server running on localhost: ${port}`);
});

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

app.post('/api', async function (req, res) {
  const text = req.body.text;

  try {
    const data = await getSentimentAnalysis(text);
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch data from API' });
  }
});