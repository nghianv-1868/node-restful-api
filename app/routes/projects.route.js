const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/projects.controller');

// create project
router.route('/').post(ProjectsController.newProject);

//  get all project
router.route('/').get(ProjectsController.index);

// get one project by id
router.route('/:id').get(ProjectsController.getById);

//  update project by id
router.route('/:id').put(ProjectsController.updateById);

//  delete project by id
router.route('/:id').delete(ProjectsController.deleteById);

module.exports = router;
