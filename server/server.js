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

// app.get('/projects/:projectId', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/dist/index.html'), (err) => {
//     if (err) {
//       console.log(err);
//     }
//   })
// })

app.get('/projects/:projectId/comments', (req, res) => {
  Comment.find(req.params, (err, results) => {
    // console.log(req.params)
    if (err) {
      res.send(err);
    }
    res.send(results);
  });
});

// create
app.post('/projects/:projectId/comments', (req, res) => {
  Comment.create(req.body, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send('posted');
    }
  });
})

// update 
app.put('/projects/:projectId/comments/:commentId', (req, res) => {
  Comment.findOneAndUpdate(req.params, req.body, (err, results) => {
    if (err) {
      res.send(err);
    }
    res.send('updated');
  });
});

// delete single comment
app.delete('/projects/:projectId/comments/:commentId', (req, res) => {
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
