const express = require('express');

const router = express.Router();

const contactContoller = require('../controller/Contact');

router.post('/postContact', contactContoller.postContact);

module.exports = router;