const express = require('express');
const controller = require('../controllers/signup.controller.js');

const router = express.Router();

router.get('/', controller.GetSignUpView);
router.post('/', controller.SignUpUser);

module.exports = router;
