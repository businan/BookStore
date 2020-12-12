const express = require('express');
const authMiddleware = require('../middleware/AuthMiddleware');
const router = express.Router();

/**
 * @route /api/profile
 * @desc route for profile
 * @access Private
*/


router.get("/", authMiddleware, (req, res) => {
    res.send(req.decodedUser)
})

module.exports = router;

