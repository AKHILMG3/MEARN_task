const express = require('express');
const userController = require('../Controller/userController');

const router = express.Router();

router.post('/api/register', userController.register);

module.exports = router;
