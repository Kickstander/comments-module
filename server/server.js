const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const Project = require('../database/index.js').Project;

const app = express();

const port = 8081;

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/:projectId', cors(), (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      console.log(err);
    }
  })
})

app.get('/projects/:projectId/comments', cors(), (req, res) => {
  Project.find({"projectId": req.params.projectId}, (err, results) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(JSON.stringify(results));
  });
});

app.listen(port, () => {
  console.log('listening..............o.o');
});
