const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

exports.authRegister = async (req, res) => {
    //TODO: register function
    // req.body.'....'

    const {firstName, lastName, email, password } = req.body;
    //console.log(firstName, lastName, email, password);

    // TODO1: validate field
    // TODO2: Check already registered
    // TODO3: crpyt password
    // TODO4: save the user to DB

    // TODO1: validate field
    // We check that in middleware in AuthRouter.js
    // check(
    //     'password', 
    //     'Please enter a password more then 6 char.'
    //     ).isLength({
    //     min: 6
    // });

    const validationErr = validationResult(req)
    // console.log(validationErr)
    if(validationErr?.errors?.length > 0) {
        return res
        .status(400)
        .json({errors: validationErr.array()})
    }


    // TODO2: Check already registered
    const userData = await User.findOne({email:email}) // ({email}) same
    if(userData) {
        return res
        .status(400)
        .json({errors: [{message: "User Already exist!!"}]})
    }

    // TODO3: crpyt password
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt)
    // console.log(salt)
    // console.log(newPassword)

    // TODO4: save the user to DB
    const user = new User({
        firstName,
        lastName,
        email,
        password: newPassword
    })
    await user.save();

    // TODO: Error handling for saving
    res.send('Register Completed')
}

exports.authLogin = (req, res) => {
    // TODO: Auth.
    // TODO: Login func.
    res.send('Login Completed')
}