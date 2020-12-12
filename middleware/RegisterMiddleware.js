const { check } = require('express-validator');

const registerMiddleware = [
    check('password', 'Please enter a password more then 6 char.!!!').isLength(
        {
            min: 6
        }
    ),
    check('email', 'Please enter a valid email!!!').isEmail(),
    check('firstName', 'Please enter a First Name!!!').exists(),
    check('lastName', 'Please enter a Last Name!!!').exists(),

]

module.exports = registerMiddleware;