const express = require('express');
const router = express.Router();
const IndexController = require('../../../controllers/index.controller');

router.get('/', IndexController.getWelcomeMessage);

module.exports = router; 