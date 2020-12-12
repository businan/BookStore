const express = require('express');

const router = express.Router();

/**
 * @route /api/profile
 * @desc route for profile
 * @access Private
*/


router.get("/",  (req, res) => {
    res.send('Private Profile')
})

module.exports = router;