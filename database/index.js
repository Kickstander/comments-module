const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projects');

const projectSchema = new mongoose.Schema({
  projectId: Number,
  comments: Array,
});

const Project = mongoose.model('Project', projectSchema);

module.exports.Project = Project;
