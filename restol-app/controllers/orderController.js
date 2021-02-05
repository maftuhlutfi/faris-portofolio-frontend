const {Order} = require('../models')

module.exports = {
    // @desc    Get all order
    // @route   GET /api/order
    // @access  Private
    getAllOrder: (req, res) => {
        Order.selectAllOrder(data => {
            res.status(200).send(data)
        })
    },
    // @desc    Get order by id
    // @route   GET /api/order/:id
    // @access  Public
    getOrderById: (req, res) => {
        Order.selectOrderById(req.params.id, data => {
            res.status(200).send(data)
        })
    },
    // @desc    Add new order from: 
    //          - cashier (id_pegawai, nama_customer, tipe_order)
    //          - customer (nama_customer, id_user, tipe_order)
    // @route   POST /api/order
    // @access  Private
    createNewOrder: (req, res) => {
        const value = Object.values(req.body);
        const {tipe} = req.user;
        
        // Order from Admin/Cashier or Customer
        if (tipe == 1 || tipe == 2) {
            Order.addOrderFromCashier(value, data => {
                res.status(200).send(data)
            })
        } else if (tipe == 5) {
            Order.addOrderFromCustomer(value, data => {
                res.status(200).send(data)
            })
        } else {
            res.status(401).send("Not Authorized.")
        }
    },
    // @desc    Add detail order (id_order, id_produk, jumlah)
    // @route   POST /api/order/detail
    // @access  Private
    addDetailOrder: (req, res) => {
        const value = Object.values(req.body)
        Order.addDetailOrder(value, req.params.id, result => {
            if (result.changedRows === 0) {
                res.status(204).send("No data found to be updated.")
            } else {
                res.status(200).send("Order detail updated successfully.")
            }
        })
    },
    // @desc    Update order done
    // @route   PUT /api/order/:id
    // @access  Private
    updateOrderDone: (req, res) => {
        Order.updateOrderDone(req.params.id, result => {
            if (result.changedRows === 0) {
                res.status(204).send("No data found to be updated.")
            } else {
                res.status(200).send("Order updated successfully.")
            }
        })
    },
    // @desc    Update detail order jumlah (id_order, id_produk, jumlah)
    // @route   PUT /api/order/detail
    // @access  Private
    updateDetailOrderQty: (req, res) => {
        const value = Object.values(req.body)
        Order.updateDetailOrderQty(value, result => {
            if (result.changedRows === 0) {
                res.status(204).send("No data found to be updated.")
            } else {
                res.status(200).send("Order updated successfully.")
            }
        })
    },
    // @desc    Delete a detail order by (id_order, id_produk)
    // @route   DELETE /api/order/detail/:id_order&:id_produk
    // @access  Private
    deleteOneDetailOrder: (req, res) => {
        const {id_order, id_produk} = req.params;
        Order.deleteOneDetailOrder([id_order, id_produk], data => {
            res.status(200).send(`Successfully deleted detail order with id order ${id_order} and id produk ${id_produk}`)
        })
    },
    // @desc    Delete a order by id
    // @route   DELETE /api/order/:id
    // @access  Private
    deleteOneOrderById: (req, res) => {
        Order.deleteOne(req.params.id, data => {
            res.status(200).send("Successfully deleted Order with id " + req.params.id)
        })
    }
}