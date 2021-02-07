const connection = require('../config/db')

const Delivery = {
    selectAllDelivery: cb => {
        const queryString = `SELECT * FROM delivery;`
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    selectDeliveryById: (id, cb) => {
        const queryString = `SELECT *
            FROM delivery
            WHERE id = ?;`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
    insertOne: (vals, cb) => {
        const queryString = `INSERT INTO delivery (id_pembayaran, id_user, alamat, id_pegawai) VALUES (?,?,?,?);`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    updateDeliveryDone: (id, cb) => {
        const queryString = `UPDATE delivery
            SET waktu_selesai=CURRENT_TIMESTAMP(), selesai='Y'
            WHERE id=?;`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    deleteOne: (id, cb) => {
        const queryString = `DELETE FROM delivery WHERE id=?;`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = Delivery