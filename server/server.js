require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const Comment = require('../database/index.js');

const app = express();

const port = 8081;

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use('/projects/:projectId', express.static(path.resolve(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/projects/:projectId/comments', (req, res) => {
  Comment.find(req.params, (err, results) => {
    if (err) {
      res.send(err);
    }
    res.set('Content-Type', 'application/json').send(JSON.stringify(results));
  });
});

// create
app.post('/api/projects/:projectId/comments', (req, res) => {
  Comment.create(req.body, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send('posted');
    }
  });
})

// update 
app.put('/api/projects/:projectId/comments/:commentId', (req, res) => {
  Comment.findOneAndUpdate(req.params, req.body, (err, results) => {
    if (err) {
      res.send(err);
    }
    res.send('updated');
  });
});

// delete single comment
app.delete('/api/projects/:projectId/comments/:commentId', (req, res) => {
  Comment.findOneAndDelete(req.params, (err, results) => {
    if (err) {
      res.send(err);
    }
    res.send('deleted');
  });
});


app.listen(port, () => {
  console.log('listening on port :', port);
});
