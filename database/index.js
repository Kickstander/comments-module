const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/comments');

const commentSchema = new mongoose.Schema({
  id: Number,
  author: String,
  authorIsCreator: Boolean,
  profilePicture: String,
  createdAt: Date,
  body: String,
  replies: Array,
});

const Comment = mongoose.model('Comment', commentSchema);

let allComments = [];

Comment.find({}, (err, results) => {
  if (err) {
    console.log(err);
  }
  allComments = results;
});

module.exports.Comment = Comment;
module.exports.allComments = allComments;
