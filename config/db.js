const mysql = require('mysql2')

// mysql set
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
})

connection.connect()

module.exports = connection