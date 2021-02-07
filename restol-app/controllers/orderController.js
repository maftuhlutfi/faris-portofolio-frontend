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
    // @access  Private
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
                res.status(200).send(("Successfully add order from admin/cashier."))
            })
        } else if (tipe == 5) {
            Order.addOrderFromCustomer(value, data => {
                res.status(200).send("Successfully add order from user.")
            })
        } else {
            res.status(401).send("Not Authorized.")
        }
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
    // @desc    Delete a order by id
    // @route   DELETE /api/order/:id
    // @access  Private
    deleteOneOrderById: (req, res) => {
        Order.deleteOneOrder(req.params.id, data => {
            res.status(200).send("Successfully deleted Order with id " + req.params.id)
        })
    },

    // ======= DETAIL ORDER =========

    // @desc    Get all order
    // @route   GET /api/order/detail
    // @access  Private
    getAllOrderDetails: (req, res) => {
        Order.selectAllOrderDetails(data => {
            res.status(200).send(data)
        })
    },
    // @desc    Get order by id
    // @route   GET /api/order/:id/detail
    // @access  Private
    getAllOrderDetailsById: (req, res) => {
        Order.selectAllOrderDetailsById(req.params.id, data => {
            res.status(200).send(data)
        })
    },
    // @desc    Get order by id
    // @route   GET /api/order/:id/detail/:id_produk
    // @access  Private
    getAllOrderDetailsByIdOrderAndIdProduct: (req, res) => {
        const {id, id_produk} = req.params;
        Order.selectAllOrderDetailsByIdOrderAndIdProduct(id, id_produk, data => {
            res.status(200).send(data)
        })
    },
    // @desc    Add detail order (id_order, id_produk, jumlah)
    // @route   POST /api/order/:id/detail
    // @access  Private
    addDetailOrder: (req, res) => {
        const value = Object.values(req.body)
        Order.addDetailOrder(value, result => {
            res.status(200).send("Successfully add detail order.")
        })
    },
    // @desc    Update detail order jumlah (jumlah)
    // @route   PUT /api/order/:id/detail/:id_produk
    // @access  Private
    updateDetailOrderQty: (req, res) => {
        const {id, id_produk} = req.params;
        const {jumlah} = req.body;
        const value = [jumlah, id_produk, id];
        Order.updateDetailOrderQty(value, result => {
            if (result.changedRows === 0) {
                res.status(204).send("No data found to be updated.")
            } else {
                res.status(200).send("Order updated successfully.")
            }
        })
    },
    // @desc    Delete all detail order by (id_order)
    // @route   DELETE /api/order/:id/detail
    // @access  Private
    deleteAllDetailOrderById: (req, res) => {
        Order.deleteAllDetailOrderByIdOrder(req.params.id, result => {
            if (result.affectedRows === 0) {
                res.status(204).send("No data found to be updated.")
            } else {
                res.status(200).send(`Successfully deleted detail order with id order ${req.params.id}`)
            }
        })
    },
    // @desc    Delete a detail order by (id_order, id_produk)
    // @route   DELETE /api/order/:id/detail/:id_produk
    // @access  Private
    deleteOneDetailOrder: (req, res) => {
        const {id, id_produk} = req.params;
        Order.deleteOneDetailOrder([id, id_produk], result => {
            if (result.affectedRows === 0) {
                res.status(204).send("No data found to be updated.")
            } else {
                res.status(200).send(`Successfully deleted detail order with id order ${id} and id produk ${id_produk}`)
            }
        })
    }
}