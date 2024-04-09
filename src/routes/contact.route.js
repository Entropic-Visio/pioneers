const express = require('express');
const { GetContactView } = require('../controllers/contact.controller.js');

const router = express.Router();

router.get('/', (req, res) => {
    GetContactView(req, res);
});

module.exports = router;
