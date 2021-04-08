const express = require('express');
const signUp = require('../controllers/signUpController');
const signIn = require('../controllers/signInController');

const router = express.Router();

router.post('/signUp', signUp);
router.post('/signIn', signIn);

module.exports = router;
