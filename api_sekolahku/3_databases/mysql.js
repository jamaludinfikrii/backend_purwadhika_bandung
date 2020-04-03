const mysql = require('mysql')

// Setting Database Connection
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "111111111",
    port : 3306,
    database : "sekolahku"
})

module.exports = db