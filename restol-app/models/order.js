const connection = require('../config/db')

const Order = {
    selectAllOrder: cb => {
        const queryString = `SELECT * FROM \`order\`;`
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    selectOrderById: (id, cb) => {
        const queryString = `SELECT *
            FROM \`order\`
            WHERE id = ?;`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
    selectAllOrderDetails: cb => {
        const queryString = `SELECT *
            FROM detail_order;`
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
    selectAllOrderDetailsById: (idOrder, cb) => {
        const queryString = `SELECT *
            FROM detail_order
            WHERE id_order = ?;`
        connection.execute(queryString, [idOrder], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
    selectTotalPayment: (idOrder, cb) => {
        const queryString = `SELECT SUM(do.jumlah * p.harga) AS total 
            FROM detail_order do 
            INNER JOIN produk p ON p.id = do.id_produk 
            WHERE do.id_order = ?;`
        connection.execute(queryString, [idOrder], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
    selectAllOrderDetailsByIdOrderAndIdProduct: (idOrder, idProduct, cb) => {
        const queryString = `SELECT *
            FROM detail_order
            WHERE id_order = ? AND id_produk=?;`
        connection.execute(queryString, [idOrder, idProduct], (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
    addOrderFromCashier: (vals, cb) => {
        const queryString = `INSERT INTO \`order\` (id_pegawai, nama_customer, tipe_order) VALUES (?,?,?);`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    addOrderFromCustomer: (vals, cb) => {
        const queryString = `INSERT INTO \`order\` (nama_customer, id_user, tipe_order) VALUES (?,?,?);`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    addDetailOrder: (vals, cb) => {
        const queryString = `INSERT INTO detail_order VALUES (?,?,?)`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    updateOrderDone: (id, cb) => {
        const queryString = `UPDATE \`order\`
            SET selesai='Y'
            WHERE id=?;`
        connection.execute(queryString, [id], (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    updateDetailOrderQty: (vals, cb) => {
        const queryString = `UPDATE detail_order
            SET jumlah = ?
            WHERE id_produk = ? AND id_order = ?;`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    deleteAllDetailOrderByIdOrder: (idOrder, cb) => {
        const queryString = `DELETE FROM detail_order
            WHERE id_order = ?;`
        connection.execute(queryString, [idOrder], (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    deleteOneDetailOrder: (vals, cb) => {
        const queryString = `DELETE FROM detail_order
            WHERE id_order = ? AND id_produk = ?;`
        connection.execute(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    deleteOneOrder: (idOrder, cb) => {
        const queryString = `DELETE FROM \`order\`
            WHERE id = ?;`
        connection.execute(queryString, [idOrder], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = Order