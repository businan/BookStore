const User = require('../models/UserModel');

exports.authRegister = async (req, res) => {
    //TODO: register function
    // req.body.'....'

    const {firstName, lastName, email, password } = req.body;
    console.log(firstName, lastName, email, password);

    // TODO1: validate field
    // TODO2: Check already registered
    // TODO3: crpyt password
    // TODO4: save the user to DB


    // TODO4: save the user to DB
    const user = new User({
        firstName,
        lastName,
        email,
        password
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