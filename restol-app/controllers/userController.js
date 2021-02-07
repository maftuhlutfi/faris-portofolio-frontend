const { User } = require('../models')
const bcrypt = require('bcrypt')
const saltRounds = 8

const passport = require('passport')
const jwt = require('jsonwebtoken')

module.exports = {
    // @desc    Auth user & get token
    // @route   POST /api/user/login
    // @access  Public
    authUser: async (req, res, next) => {
        passport.authenticate('login', async (err, user, info) => {
            try {
                if (err || !user) {
                    res.status(400).send("Email or password is incorrect.")
                }
                req.login(user, { session: false }, async (error) => {
                    if (error) return next(error)

                    const token = jwt.sign({ user }, 'TOP_SECRET');

                    return res.json({token})
                })
            } catch (error) {
                console.log("ERROR")
                return next(error)
            }
        })(req, res, next)
    },
    // @desc    Get logged in user details
    // @route   POST /api/user/status
    // @access  Private
    getUserStatus: (req, res) => {
        res.json({
            user: req.user,
            token: req.query.secret_token
        })
    },
    // @desc    Register a new user (email, password, tipe)
    // @route   POST /api/user/login
    // @access  Public
    createNewUser: (req, res) => {
        try {
            const userData = Object.values(req.body);
            bcrypt.hash(userData[1], saltRounds, (err, hash) => {
                if (err) console.error(err)

                userData[1] = hash
                User.insertOne(userData, result => {
                    console.log(result)
                    res.status(200).send("Successfully add new user.")
                })
            })
        } catch (err) {
            res.status(400).send(err)
        }
    },
    // @desc    Get all users
    // @route   GET /api/users
    // @access  Private/Admin
    getAllUsers: (req, res) => {
        console.log(req.user)
        User.selectAllUser(data => {
            res.status(200).send(data)
        })
    },
    // @desc    Get user by id
    // @route   GET /api/users/:id
    // @access  Private
    getUserById: (req, res) => {
        User.selectOneById(req.params.id, data => {
            res.status(200).send(data)
        })
    },
    // @desc    Update user by id (nama, password, alamat, hp, foto)
    // @route   PUT /api/users/:id
    // @access  Public
    updateUserById: (req, res) => {
        const userData = Object.values(req.body)
        bcrypt.hash(userData[1], saltRounds, (err, hash) => {
            if (err) console.error(err)
            userData[1] = hash
            User.updateOne(userData, req.params.id, result => {
                if (result.changedRows === 0) {
                    res.status(204).send("No data found to be updated.")
                } else {
                    res.status(200).send("User updated successfully.")
                }
            })
        })
    },
    // @desc    Delete a user by id
    // @route   DELETE /api/users/:id
    // @access  Private
    deleteOneUserById: (req, res) => {
        User.deleteOne(req.params.id, data => {
            res.status(200).send("Successfully deleted user with id " + req.params.id)
        })
    }
}