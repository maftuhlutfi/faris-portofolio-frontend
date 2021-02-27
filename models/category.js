const connection = require('../config/db')

const Category = {
    selectAllCategory: cb => {
        const queryString = `SELECT * FROM kategori`
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    selectCategoryById: (id, cb) => {
        const queryString = `SELECT *
            FROM kategori
            WHERE id = ?`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
    insertOne: (vals, cb) => {
        const queryString = `INSERT INTO kategori (nama, icon) VALUES (?,?)`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    updateOne: (vals, id, cb) => {
        vals.push()
        vals.push(id)
        const queryString = `UPDATE kategori
            SET nama=?, icon=?
            WHERE id=?;`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    deleteOne: (id, cb) => {
        const queryString = `DELETE FROM kategori WHERE id=?;`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = Category