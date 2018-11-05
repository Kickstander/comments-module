const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const databaseExports = require('../database/index.js');

const app = express();

const port = 3001;

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  databaseExports.Comment.find({}, (err, results) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(JSON.stringify(results));
  });
});

app.listen(port, () => {
  console.log('listening..............o.o');
});
