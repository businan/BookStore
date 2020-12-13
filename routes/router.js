const express = require('express');

const router = express.Router();
const AuthRouter = require('./AuthRouter');
const ProfileRouter = require('./ProfileRouter');
const BookRouter = require('./BookRouter');



// Only "/api" endpoint

/**
 * @route /api/auth
 * @desc route for auth
*/
router.use("/auth", AuthRouter);

/**
 * @route /api/profile
 * @desc route for profile
*/

router.use("/profile", ProfileRouter);

/**
 * @route /api/book
 * @desc route for book
*/

router.use("/books", BookRouter);





module.exports = router;