const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const { User } = require('../models');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();


class UserController {
    static async register(req, res) {
        try {
            const { name, email, password } = req.body

            let newUser = await User.create({ name, email, password })
            const withoutPassword = {
                name: newUser.name,
                email: newUser.email,
            };

            res.status(201).json(withoutPassword)
        } catch (error) {
            if (error.name === "SequelizeValidationError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            if (error.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body

            if (!email) return res.status(400).json({ message: "Please enter your email" })
            if (!password) return res.status(400).json({ message: "Please enter your password" })

            let findUser = await User.findOne({ where: { email } })
            if (!findUser) return res.status(401).json({ message: "Invalid email/password" })

            let checkPassword = comparePassword(password, findUser.password)
            if (!checkPassword) return res.status(401).json({ message: "Invalid email/password" })

            let access_token = signToken({ id: findUser.id, email: findUser.email })

            res.status(200).json({ access_token: access_token })
        } catch (error) {
            console.log(error)
            if (error.name === "SequelizeValidationError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            if (error.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async googleAuth(req, res) {
        console.log(req.headers.g_token)
        try {
            const ticket = await client.verifyIdToken({
                idToken: req.headers.g_token,
                audience: process.env.G_CLIENT, 
            });
            const payload = ticket.getPayload();

            let user = await User.findOne({ where: { email: payload.email } })
            if(!user) {
                user = await User.create({ 
                    name: payload.name, 
                    email: payload.email,
                    password : Math.random().toString()
                })
            }
        res.status(200).json({access_token: signToken({ id: user.id, email: user.email })})
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = UserController