const settingDataProvider = require('../providers/setting_dataprovider');

let SettingService = {


  getSetting: async(settingId, dbKey) => {
    let setting = await settingDataProvider.getSetting(settingId, dbKey);
    return setting;
  },

  createSetting: async(body, dbKey) => {
    let setting = await settingDataProvider.createSetting(body, dbKey);
    return setting;
  },

  updateSetting: async(body, dbKey, settingId) => {
    let setting = await settingDataProvider.updateSetting(body, dbKey, settingId);
    return setting;
  }

};

module.exports = SettingService;
