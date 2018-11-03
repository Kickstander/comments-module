const express = require('express');
const bodyParser = require('body-parser');
const databaseExports = require('../database/index.js');

const app = express();

const port = 3001;

app.use(express.static('client/dist'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  databaseExports.Comment.find({}, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(JSON.stringify(results));
  });
});

app.listen(port, () => {
  console.log('listening..............o.o');
});
