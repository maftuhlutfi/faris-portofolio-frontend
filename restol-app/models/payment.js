const connection = require('../config/db')

const Payment = {
    selectAllPayment: cb => {
        const queryString = `SELECT * FROM pembayaran;`
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    selectPaymentById: (id, cb) => {
        const queryString = `SELECT *
            FROM payment
            WHERE id = ?;`
        connection.execute(queryString, id, (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
    addPaymentFromCashier: (vals, cb) => {
        const queryString = `INSERT INTO payment (id_pegawai, id_order, id_cara_bayar) VALUES (?,?,?);`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    addPaymentFromUser: (vals, cb) => {
        const queryString = `INSERT INTO payment (id_order, id_cara_bayar) VALUES (?,?);`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    updatePaymentDone: (vals, id, cb) => {
        vals.push(id)
        const queryString = `UPDATE payment
            SET pembayar=?, selesai='Y', waktu_bayar=CURRENT_TIMESTAMP()
            WHERE id_pembayaran=?;`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    deleteOne: (id, cb) => {
        const queryString = `DELETE FROM payment WHERE id_pembayaran=?;`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = Payment