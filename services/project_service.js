const projectDataProvider = require('../providers/project_dataprovider');

let ProjectService = {

  getProjects: async(dbKey) => {
    let projects = await projectDataProvider.getProjects(dbKey);
    return projects;
  },
  getProject: async(projectId, dbKey) => {
    let project = await projectDataProvider.getProject(projectId, dbKey);
    return project;
  },
  createProject: async(body, dbKey) => {
    let project = await projectDataProvider.createProject(body, dbKey);
    return project;
  },
  updateProject: async(body, dbKey, projectId) => {
    let project = await projectDataProvider.updateProject(body, dbKey, projectId);
    return project;
  },
  deleteProject: async(projectId, dbKey) => {
    let project = await projectDataProvider.deleteProject(projectId, dbKey);
    return project;
  }

};

module.exports = ProjectService;
