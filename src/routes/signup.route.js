const express = require('express');
const controller = require('../controllers/signup.controller.js');

const router = express.Router();

router.get('/', controller.GetSignUpView);

module.exports = router;
