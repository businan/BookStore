var jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // TODO1: get Token
    // TODO2: return error if token doesn't exist
    // TODO3: verify Token

    // TODO1: get Token
    const token = req.header('token');

    // TODO2: return error if token doesn't exist
    if(!token) {
        return res
            .status(401)
            .json({ errors: [{ message: "Token doesn't exist" }] })
    }
    
    // TODO3: verify Token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
        // console.log(decodedToken)
        if(err) {
            return res
                .status(401)
                .json({ errors: [{ message: "Invalid Token" }] })
        }else {
            req.decodedUser = decodedToken.userData
            next()
        }
    })
}

module.exports = authMiddleware;