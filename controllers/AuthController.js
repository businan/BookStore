exports.authRegister = (req, res) => {
    //TODO: register function
    // req.body.'....'

    const {firstName, lastName, email, password } = req.body;
    console.log(firstName, lastName, email, password);
    
    // TODO1: validate field
    // TODO2: Check already registered
    // TODO3: crpyt password
    // TODO4: save the user to DB
    res.send('Register Completed')
}

exports.authLogin = (req, res) => {
    // TODO: Auth.
    // TODO: Login func.
    res.send('Login Completed')
}