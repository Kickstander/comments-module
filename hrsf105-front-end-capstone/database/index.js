var mongoose = require('mongoose');
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

module.exports.Comment = Comment;

