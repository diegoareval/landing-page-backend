const userDataProvider = require('../user/user_dataprovider');
const logger = require('../utils/logger');

let SignupService = {

  newAccountSignup: async(body) => {
    logger.info(`Add User to Tenant DB[Email: ${body.email}]`);
   return await userDataProvider.createUser({
      "firstName": body.firstName,
      "lastName": body.lastName,
      "email": body.email,
      "password": body.password}, `default`);

  }
};

module.exports = SignupService;
