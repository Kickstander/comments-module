const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const Project = require('../database/index.js').Project;
const Comment = require('../database/index.js').Comment;

const app = express();

const port = 8081;

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// read all
app.get('/projects/:projectId/comments', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      console.log(err);
    }
  })
})

// read one
app.get('/projects/:projectId/comments', (req, res) => {
  Project.find({"projectId": req.params.projectId}, (err, results) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(JSON.stringify(results));
  });
});

// create
app.post('/projects/:projectId/comments/:comment', (req, res) => {
  Comment.create({
    projectId: req.body.projectId,
    comments: req.body.comments,
  }, (err, docs) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('Inserted a single entry successfully');
      res.sendStatus(201);
    }
  });
})

// update 
app.put('/projects/:projectId/comments/:comment', (req, res) => {
  Project.findByIdAndUpdate({
    projectId: req.params.projectId, 
    comments: req.params.comments
  }, req.body, (err, results) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(JSON.stringify(results));
  });
});

// delete single comment
app.delete('/projects/:projectId/comments/:comment', (req, res) => {
  Project.findByIdAndDelete({
    projectId: req.params.projectId
  }, { comments: req.params.comments
  }, (err, results) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(JSON.stringify(results));
  });
});


app.listen(port, () => {
  console.log('listening on port :', port);
});

// cvs for table format