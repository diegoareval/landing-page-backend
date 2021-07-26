const projectService = require('../services/project_service');
const responder = require('../utils/responder');
const {dbKey} = require('../utils/constants')
let projectController = {

  getProjects: async (_, response, next) => {
    try {
      let projects = await projectService.getProjects(dbKey);
      responder.sendResponse(response, 200, "success", projects, "Projects retrieved successfully.");
    } catch (error) {
      return next(error);
    }
  },
  getProject: async (request, response, next) => {
    try {
      let projectId = request.params.projectId;
      let project = await projectService.getProject(projectId, dbKey);
      responder.sendResponse(response, 200, "success", project, "Project deleted successfully.");
    } catch (error) {
      return next(error);
    }
  },
  createProject: async (request, response, next) => {
    try {
      let body = request.body;
      let project = await projectService.createProject(body, dbKey);
      responder.sendResponse(response, 200, "success", project, "Project created successfully.");
    } catch (error) {
      return next(error);
    }
  },
  updateProject: async (request, response, next) => {
    try {
      let body = request.body;
      let projectId = request.params.projectId;
      let project = await projectService.updateProject(body, dbKey, projectId);
      responder.sendResponse(response, 200, "success", project, "Project updated successfully.");
    } catch (error) {
      return next(error);
    }
  },
  deleteProject: async (request, response, next) => {
    try {
        let projectId = request.params.projectId;
      let project = await faqService.deleteFaq(projectId, dbKey);
      responder.sendResponse(response, 200, "success", project, "Project deleted successfully.");
    } catch (error) {
      return next(error);
    }
  }

};

module.exports = projectController;
