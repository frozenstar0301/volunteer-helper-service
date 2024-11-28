const express = require('express');
const { getHelpers } = require('../controllers/helperController');
const router = express.Router();

router.get('/', getHelpers);

module.exports = router;
