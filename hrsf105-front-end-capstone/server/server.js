const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(express.static('client/dist'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  console.log('hello from inside app.get');
  res.status(200).send(JSON.stringify(res));
});

app.listen(port, () => {
  console.log('listening..............o.o');
});
