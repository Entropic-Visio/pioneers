const express = require('express');
const { GetSignUpView } = require('../controllers/signup.controller.js');

const router = express.Router();

router.get('/', (req, res) => {
    GetSignUpView(req, res);
});

module.exports = router;
