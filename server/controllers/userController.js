const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const { User } = require('../models');

class UserController {
    static async register(req, res) {
        try {
            const { username, email, password } = req.body

            let newUser = await User.create({ username, email, password })
            const withoutPassword = {
                username: newUser.username,
                email: newUser.email,
            };
            
            res.status(201).json(withoutPassword)
        } catch (error) {
            if(error.name === "SequelizeValidationError") {
                return res.status(400).json({message : error.errors[0].message})
            }
            if(error.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({message : error.errors[0].message})
            }
            res.status(500).json({message : "Internal server error"})
        }
    }

    static async login(req, res) {
        try {
            const { email , password } = req.body

            if(!email) return res.status(400).json({message : "Please enter your email"})
            if(!password) return res.status(400).json({message : "Please enter your password"})

            let findUser = await User.findOne({where : {email}})
            if(!findUser) return res.status(401).json({message : "Invalid email/password"})

            let checkPassword = comparePassword(password, findUser.password)
            if(!checkPassword) return res.status(401).json({message : "Invalid email/password"})

            let access_token = signToken({id : findUser.id, email: findUser.email})

            res.status(200).json({access_token : access_token})
        } catch (error) {
            if(error.name === "SequelizeValidationError") {
                return res.status(400).json({message : error.errors[0].message})
            }
            if(error.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({message : error.errors[0].message})
            }
            res.status(500).json({message : "Internal server error"})
        }
    }
}

module.exports = UserController