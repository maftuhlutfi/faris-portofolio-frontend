const connection = require('../config/db')

const Product = {
    selectAllProduct: cb => {
        const queryString = `SELECT * FROM produk`
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    selectAllProductByCategory: (categoryId, cb) => {
        const queryString = `SELECT *
            FROM produk p
            WHERE k.id = ?`
        connection.execute(queryString, categoryId, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    selectProductById: (id, cb) => {
        const queryString = `SELECT *
            FROM produk
            WHERE id = ?`
        connection.execute(queryString, id, (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
    insertOne: (vals, cb) => {
        const queryString = `INSERT INTO produk (nama, harga, kategori, diskon, foto) VALUES (?,?,?,?,?)`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    updateOne: (vals, id, cb) => {
        vals.push()
        vals.push(id)
        const queryString = `UPDATE produk
            SET nama=?, harga=?, kategori=?, diskon=?, waktu=?, updated_at=CURRENT_TIMESTAMP()
            WHERE id=?;`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    deleteOne: (id, cb) => {
        const queryString = `DELETE FROM produk WHERE id=?;`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = Product