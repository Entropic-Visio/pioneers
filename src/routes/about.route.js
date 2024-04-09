const express = require('express');
const { GetAboutView } = require('../controllers/about.controller.js');

const router = express.Router();

router.get('/', (req, res) => {
    GetAboutView(req, res);
});

module.exports = router;
