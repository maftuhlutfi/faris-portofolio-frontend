const passport = require('passport')

const protect = passport.authenticate('jwt', {session: false})

const admin = (req, res, next) => {
    const {user} = req;

    if (user.tipe == 1) {
        next()
    } else {
        res.status(401).send('Not Authorized as Admin.')
    }
}

module.exports = {admin, protect}