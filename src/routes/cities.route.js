const express = require('express');
const { GetAllCities } = require('../controllers/cities.controller.js');

const router = express.Router();

router.get('/', (req, res) => {
    GetAllCities(req, res);
});

module.exports = router;
