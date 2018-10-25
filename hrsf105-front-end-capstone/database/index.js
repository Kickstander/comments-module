var mongoose = require('mongoose');
var fakedatagenerator = require('../fakedatagenerator.js');
mongoose.connect('mongodb://localhost/comments');

//define schema and make reference to it 
var commentSchema = new mongoose.Schema({
  id: Number,
  author: String,
  authorIsCreator: Boolean,
  profilePicture: String,
  createdAt: Date,
  body: String,
  replies: Array
});

//compile schema into model
var Comment = mongoose.model('Comment', commentSchema);

Comment.insertMany(fakedatagenerator.fakeCommentData, function(err, comments) {
  if (err) {
    console.log('There was an error seeding your database');
  } else {
    console.log('Data successfully saved!!');
  }
})