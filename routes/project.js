const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');

router.get('/', function (request, response, next) {
    projectController.getProjects(request, response, next);
});

router.get('/:projectId', function (request, response, next) {
    projectController.getProject(request, response, next);
});

router.post('/', function (request, response, next) {
    projectController.createProject(request, response, next);
});

router.put('/:projectId', function (request, response, next) {
    projectController.updateProject(request, response, next);
});

router.delete('/:projectId', function (request, response, next) {
    projectController.deleteProject(request, response, next);
});

module.exports = router;
