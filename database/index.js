const mongoose = require('mongoose');
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
mongoose.connect(`mongodb://${username}:${password}@ds157923.mlab.com:57923/commentsmodule`, {}, (err) => {
  if (err) {
    console.log('OMG! Failed to connect to database! :(');
  } else {
    console.log('YAY! connected to database! :D');
  }
});

const projectSchema = new mongoose.Schema({
  projectId: Number,
  comments: Array,
});

const Project = mongoose.model('Project', projectSchema);

module.exports.Project = Project;
