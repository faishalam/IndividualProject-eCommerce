const jwt = require("jsonwebtoken");
// const SECRET_KEY = process.env.SECRET_KEY
const SECRET_KEY = 'rahasia'

const signToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY)
}

const verifyToken = (token) => {
    console.log(token)
    return jwt.verify(token, SECRET_KEY)
}

module.exports = {
    signToken,
    verifyToken
}