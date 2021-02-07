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
            FROM pembayaran
            WHERE id_pembayaran = ?;`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
    addPaymentFromCashier: (vals, cb) => {
        const queryString = `INSERT INTO pembayaran (id_pegawai, id_order, id_cara_bayar, total_bayar) VALUES (?,?,?,?);`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    addPaymentFromUser: (vals, cb) => {
        const queryString = `INSERT INTO pembayaran (id_order, id_cara_bayar, total_bayar) VALUES (?,?,?);`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    updatePaymentDone: (vals, id, cb) => {
        vals.push(id)
        const queryString = `UPDATE pembayaran
            SET pembayar=?, selesai='Y', waktu_bayar=CURRENT_TIMESTAMP()
            WHERE id_pembayaran=?;`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    deleteOne: (id, cb) => {
        const queryString = `DELETE FROM pembayaran WHERE id_pembayaran=?;`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = Payment