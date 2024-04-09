const express = require('express');
const controller = require('../controllers/login.controller.js');

const router = express.Router();

router.get('/', controller.GetLoginView);

module.exports = router;
