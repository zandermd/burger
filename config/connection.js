// Set up MySQL connection
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'engel2279',
    database: 'burgers_db'
});

// Make MySQL connection
connection.connect(function(err) {
    if (err) {
        console.log(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as ID ${connection.threadId}`);
});

// Export to ORM
module.exports = connection;