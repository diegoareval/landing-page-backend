const dbRepo = require('../models');

let ProjectDataProvider = {

  getProjects: async(dbKey) => {
    const Project = dbRepo[dbKey].Project;
    const Images = dbRepo[dbKey].Image;
    return new Promise(function(resolve, reject) {
      Project.findAll({
        include: [
          { model: Images }
      ]
      })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    })},
    
  getProject: async(projectId, dbKey) => {
    const Project = dbRepo[dbKey].Project;
    const Image = dbRepo[dbKey].Image;
    return new Promise(function(resolve, reject) {
      Project.findOne({ where: { id: projectId },
        include: [
          { model: Image }
      ] })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  createProject: async(body, dbKey) => {
    const Project = dbRepo[dbKey].Project;
    const Image = dbRepo[dbKey].Image;
    return new Promise(function(resolve, reject) {
      Project.create(body,
          {
            include: [
              {
                model: Image
              }
            ]})
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  updateProject: async(body, dbKey, projectId) => {
    const Project = dbRepo[dbKey].Project;
    return new Promise(function(resolve, reject) {
        Project.update(body, { where: { id: projectId } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },
  deleteProject: async(projectId, dbKey) => {
    const Project = dbRepo[dbKey].Project;
    return new Promise(function(resolve, reject) {
      Project.destroy({ where: { id: projectId } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  }

};

module.exports = ProjectDataProvider;
