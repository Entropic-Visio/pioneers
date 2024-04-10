const express = require('express');
const controller = require('../controllers/login.controller.js');

const router = express.Router();

router.get('/', controller.GetLoginView);
router.post('/', controller.GetUserInformation);

module.exports = router;
