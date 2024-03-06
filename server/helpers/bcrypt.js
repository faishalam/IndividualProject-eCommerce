const bcrypt = require('bcryptjs')

function genSalt(password) {
    const salt = bcrypt.genSaltSync(8)
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

function comparePassword(password, passwordHash) {
    return bcrypt.compareSync(password, passwordHash)
}

module.exports = {
    genSalt,
    comparePassword
}