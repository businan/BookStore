const { check } = require('express-validator');

const loginMiddleware = [
    check('password', 'Please enter a password more then 6 char.!!!').isLength(
        {
            min: 6
        }
    ),
    check('email', 'Please enter a valid email!!!').isEmail(),
    

]

module.exports = loginMiddleware;