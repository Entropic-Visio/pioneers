const express = require('express');
const controller = require('../controllers/accountSetting.controller.js');

const router = express.Router();

router.get('/', controller.GetAccountSettingView);

module.exports = router;
