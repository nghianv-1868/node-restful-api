const Project = require('../models/project.model');

module.exports = {
  index: (req, res, next) => {
    Project.find({})
      .then((projects) => {
        console.log(projects);
        res.status(200).json(projects);
      })
      .catch((err) => {
        next(err);
      });
  },
  newProject: (req, res, next) => {
    const newProject = new Project(req.body);
    newProject
      .save()
      .then((project) => {
        console.log(project);
        res.status(200).json(project);
      })
      .catch((err) => {
        next(err);
      });
  },
  getById: (req, res, next) => {
    Project.find(ObjectId(req.id))
      .then((project) => {
        console.log(project);
        // res.status(200).json(project);
      })
      .catch((err) => {
        next(err);
      });
  },
  updateById: (req, res, next) => {
    res.status(200).json({ method: 'update by id' });
  },
  deleteById: (req, res, next) => {
    res.status(200).json({ method: 'delete by id' });
  }
};
