const {Payment} = require('../models')

module.exports = {
    // @desc    Get all payment
    // @route   GET /api/payment
    // @access  Private/Admin/Cashier
    getAllPayment: (req, res) => {
        if (req.user.tipe == 1 || req.user.tipe == 2) {
            Payment.selectAllPayment(data => {
                res.status(200).send(data)
            })
        } else {
            res.status(401).send("Not Authorized.")
        }
    },
    // @desc    Get payment by id
    // @route   GET /api/payment/:id
    // @access  Private
    getPaymentById: (req, res) => {
        Payment.selectPaymentById(req.params.id, data => {
            res.status(200).send(data)
        })
    },
    // @desc    Add new payment from: 
    //          - cashier (id_pegawai, id_order, id_cara_bayar)
    //          - customer (id_order, id_cara_bayar)
    // @route   POST /api/payment
    // @access  Private
    createNewPayment: (req, res) => {
        const value = Object.values(req.body);
        const {tipe} = req.user;
        
        // Order from Admin/Cashier or Customer
        if (tipe == 1 || tipe == 2) {
            Payment.addPaymentFromCashier(value, data => {
                res.status(200).send(data)
            })
        } else if (tipe == 5) {
            Payment.addPaymentFromUser(value, data => {
                res.status(200).send(data)
            })
        } else {
            res.status(401).send("Not Authorized.")
        }
    },
    // @desc    Update payment done by id (pembayar)
    // @route   PUT /api/payment/:id
    // @access  Private
    updatePaymentDone: (req, res) => {
        const value = Object.values(req.body);
        Payment.updateOne(value, req.params.id, result => {
            if (result.changedRows === 0) {
                res.status(204).send("No data found to be updated.")
            } else {
                res.status(200).send("Payment updated successfully.")
            }
        })
    },
    // @desc    Delete a payment by id
    // @route   DELETE /api/payment/:id
    // @access  Private/Admin
    deleteOnePaymentById: (req, res) => {
        Payment.deleteOne(req.params.id, data => {
            res.status(200).send("Successfully deleted Payment with id " + req.params.id)
        })
    }
}