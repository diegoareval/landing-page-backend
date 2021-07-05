'use strict';
const dbConnector = require('../utils/dbconnector');

let dbRepo = {};

dbConnector.addSequelizeConnectionToRepo(dbRepo, 'default');

module.exports = dbRepo;
