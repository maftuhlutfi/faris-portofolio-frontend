const connection = require('../config/db')

// Build a user Model to export to the controllers
const User = {
    selectAllUser: cb => {
        const queryString = `SELECT u.id, u.email, u.nama, u.foto, tp.nama AS tipe_user
            FROM user u
            INNER JOIN tipe_user tp
            ON u.tipe = tp.id
            ORDER BY tp.id`
        connection.query(queryString, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    getUserByEmailWithPassword: (email, done) => {
        const queryString = `SELECT u.id, u.email, u.password, u.tipe
            FROM user u
            WHERE email=?
            LIMIT 1;`
        connection.execute(queryString, [email], (err, user) => {
            if (err) return done(err, user)
            return done(null, user[0])
        })
    },
    getUserById: (id, done) => {
        const queryString = `SELECT u.id, u.email, u.nama, u.foto, tp.nama AS tipe_user
            FROM user u
            INNER JOIN tipe_user tp
            ON u.tipe=tp.id
            WHERE u.id=?
            LIMIT 1;`
        connection.execute(queryString, [id], (err, user) => {
            if (err) return done(err, user)
            return done(null, user[0])
        })
    },
    selectOneById: (id, cb) => {
        const queryString = `SELECT u.id, u.email, u.nama, u.foto, tp.nama AS tipe_user
            FROM user u
            INNER JOIN tipe_user tp
            ON u.tipe=tp.id
            WHERE u.id=?
            LIMIT 1;`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    deleteOne: (id, cb) => {
        const queryString = `DELETE FROM user WHERE id=?;`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    insertOne: (vals, cb) => {
        const queryString = `INSERT INTO user (email, password, tipe)
            VALUES (?,?,?)`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    }, 
    updateOne: (vals, id, cb) => {
        vals.push()
        vals.push(id)
        const queryString = `UPDATE user
            SET nama=?, password=?, alamat=?, hp=?, foto=?, updated_at=CURRENT_TIMESTAMP()
            WHERE id=?;`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = User