const {getUsers} = require('../controllers/user-controller');
const express = require('express');
const router = express.Router();

router.get('/',getUsers);

module.exports = router;