const mongoose = require('mongoose');
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb://localhost`, {}, (err) => {
  if (err) {
    console.log('OMG! Failed to connect to database! :(');
  } else {
    console.log('YAY! connected to database! :D');
  }
});

// const projectSchema = new mongoose.Schema({
//   projectId: Number,
//   comments: Array,
// });

const commentSchema = new mongoose.Schema({
  projectId: Number,
  author: String,
  authorIsCreator: Boolean,
  profilePicture: String,
  createdAt: Date,
  body: String,
  replies: Array,
});

// const Project = mongoose.model('Project', projectSchema); 
const Comment = mongoose.model('Comment', commentSchema);

// module.exports = { Project, Comment } ;
module.exports = Comment;
