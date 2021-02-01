const mysql = require('mysql2')

// mysql set
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restaurant'
})

connection.connect()

module.exports = connection