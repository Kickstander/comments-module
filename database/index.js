const mongoose = require('mongoose');
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb://13.57.239.222/sdc`, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('Failed to connect to Mongo database');
  } else {
    console.log('Successfully connected to Mongo database');
  }
});

const db = mongoose.connection;

const commentSchema = mongoose.Schema({
  projectId: Number,
  author: String,
  authorIsCreator: Boolean,
  profilePicture: String,
  createdAt: String,
  body: String,
  replies: Array,
});

const Comment = db.model('Comment', commentSchema);

module.exports = Comment;
