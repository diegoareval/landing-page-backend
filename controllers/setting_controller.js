const settingService = require('../services/setting_service');
const responder = require('../utils/responder');
let dbKey = 'default';
let SettingController = {

  getSetting: async (_, response, next) => {
    try {
      let setting = await settingService.getSetting(1, dbKey);
      responder.sendResponse(response, 200, "success", setting, "Setting retrieved successfully.");
    } catch (error) {
      return next(error);
    }
  },

  createOrUpdateSetting: async (request, response, next) => {
    try {
     let setting = await settingService.getSetting(1, dbKey);
     let body = request.body;
     if(!setting){
        let createdSetting = await settingService.createSetting(body, dbKey);
        responder.sendResponse(response, 200, "success", createdSetting, "Setting created successfully.");
     }else {
         await settingService.updateSetting(body, dbKey, 1);
         let setting = await settingService.getSetting(1, dbKey);
         responder.sendResponse(response, 200, "success", setting, "Setting update successfully.");
     }
    } catch (error) {
      return next(error);
    }
  }


};

module.exports = SettingController;
