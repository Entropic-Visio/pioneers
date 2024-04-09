const express = require('express');
const { GetHomeView } = require('../controllers/home.controller.js');

const router = express.Router();

router.get('/', (req, res) => {
    GetHomeView(req, res);
});

module.exports = router;
