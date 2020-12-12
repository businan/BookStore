const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');

exports.authRegister = async (req, res) => {

    const { firstName, lastName, email, password } = req.body;
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
    if (validationErr?.errors?.length > 0) {
        return res
            .status(400)
            .json({ errors: validationErr.array() })
    }


    // TODO2: Check already registered
    const userData = await User.findOne({ email: email }) // ({email}) same
    if (userData) {
        return res
            .status(400)
            .json({ errors: [{ message: "User Already exist!!" }] })
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

exports.authLogin = async (req, res) => {
    // TODO1: field validation
    // TODO2: user exist
    // TODO3: password compare
    // TODO4: authentication return JSON WEB TOKEN (jwt)

    // TODO1: field validation
    const { email, password } = req.body;

    const validationErr = validationResult(req)
    // console.log(validationErr)
    if (validationErr?.errors?.length > 0) {
        return res
            .status(400)
            .json({ errors: validationErr.array() })
    }

    // TODO2: user exist
    const userData = await User.findOne({ email: email }) // ({email}) same
    if (!userData) {
        return res
            .status(400)
            .json({ errors: [{ message: "User doesn't exist!!" }] })
    }

    // TODO3: password compare
    const isPasswordMatch = await bcrypt.compare(password, userData.password);

    if (!isPasswordMatch) {
        return res
            .status(400)
            .json({ errors: [{ message: "Invalid credentials" }] })
    }

    // TODO4: authentication return JSON WEB TOKEN (jwt)
    jwt.sign(
        { userData },
        process.env.JWT_SECRET_KEY,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) {
            return res.status(400).json({ errors: [{ message: "Unknown Error" }] });
          }
          res.send(token);
        }
      );
    };




    
