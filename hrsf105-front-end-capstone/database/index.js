var mongoose = require('mongoose');
var fakedatagenerator = require('../fakedatagenerator.js');
mongoose.connect('mongodb://localhost/comments');

var commentSchema = new mongoose.Schema({
  id: Number,
  author: String,
  authorIsCreator: Boolean,
  profilePicture: String,
  createdAt: Date,
  body: String,
  replies: Array
});

var Comment = mongoose.model('Comment', commentSchema);

Comment.insertMany(fakedatagenerator.fakeCommentData, function(err, comments) {
  console.log('hello from insertMany inside database index.js!!!!');
  if (err) {
    console.log('There was an error seeding your database');
  } else {
    console.log('Data successfully saved!!');
  }
});