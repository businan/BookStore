const express = require('express');

const registerMiddleware = require('../middleware/RegisterMiddleware');
const loginMiddleware = require('../middleware/LoginMiddleware');
const router = express.Router();

const AuthController = require('../controllers/AuthController')

// Only for /api/auth

/** 
 * @route POST /api/auth/register
 * @desc Register endpoint
 * @access Public
*/

router.post("/register", registerMiddleware, AuthController.authRegister)

/**
 * @route POST /api/auth/login
 * @desc Login endpoint
 * @access Public
*/

router.post("/login", loginMiddleware, AuthController.authLogin)


module.exports = router;