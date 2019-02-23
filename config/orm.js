// Import MySQL connection
const connection = require('./connection.js');

// Helper function for SQL syntax
function printQuestionMarks(num) {
    let arr = [];
    for(let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    let arr = [];
    for(let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            arr.push(`${key}=${value}`);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: function(itemToSelect, table, cb) {
        let queryString = `SELECT ${itemToSelect} FROM ${table}`;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, column, colVal, cb) {
        let queryString = `INSERT INTO ${table} (${column.toString()}) VALUES (?)`;
        connection.query(queryString, colVal, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    updateOne: function(table, colSetVal, condition, cb) {
        let queryString = `UPDATE ${table} SET ${objToSql(colSetVal)} WHERE ${condition}`;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
};

module.exports = orm;