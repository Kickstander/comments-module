const express = require('express');
const databaseExports = require('../database/index.js');
// console.log('allComments from db', databaseExports.allComments.schema.tree);

const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(express.static('client/dist'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  databaseExports.Comment.find({}, (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log('results from inside server: ', results);
    res.status(200).send(JSON.stringify(results));
  });
});

app.listen(port, () => {
  console.log('listening..............o.o');
});
