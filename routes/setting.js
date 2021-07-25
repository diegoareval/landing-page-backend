const express = require('express');
const router = express.Router();
const settingController = require('../controllers/setting_controller');

router.get('/', function (request, response, next) {
    settingController.getSetting(request, response, next);
});

router.post('/', function (request, response, next) {
    settingController.createOrUpdateSetting(request, response, next);
});


module.exports = router;
