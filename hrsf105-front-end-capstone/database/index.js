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

module.exports.Comment = Comment;
