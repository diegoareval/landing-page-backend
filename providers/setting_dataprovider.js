const dbRepo = require('../models');

let SettingDataProvider = {


  getSetting: async(settingId, dbKey) => {
    const Setting = dbRepo[dbKey].Setting;
    return new Promise(function(resolve, reject) {
        Setting.findOne({ where: { id: settingId } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  createSetting: async(body, dbKey) => {
    const Setting = dbRepo[dbKey].Setting;
    return new Promise(function(resolve, reject) {
        Setting.create(body)
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  updateSetting: async(body, dbKey, settingId) => {
    const Setting = dbRepo[dbKey].Setting;
    return new Promise(function(resolve, reject) {
        Setting.update(body, { where: { id: settingId } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

};

module.exports = SettingDataProvider;
