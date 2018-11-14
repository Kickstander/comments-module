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

// create
app.post('/projects/:projectId', (req, res) => {
  var instance = new Project(req.body);
  // console.log(req.body);
  // res.send('POST request to the homepage', JSON.parse(req.body));
  instance.save((err, docs) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('Inserted a single entry successfully');
      res.sendStatus(201);
    }
  });
})

// read all
app.get('/projects/:projectId', (req, res) => {
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

// update 
app.put('/projects/:projectId/comments', (req, res) => {
  Project.updateOne({"projectId": req.params.projectId}, (err, results) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(JSON.stringify(results));
  });
});

// delete
app.delete('/projects/:projectId/comments', (req, res) => {
  Project.deleteOne({"projectId": req.params.projectId}, (err, results) => {
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