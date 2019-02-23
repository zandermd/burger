// Import the ORM
const orm = require('../config/orm.js');

const burger = {
    all: function(cb) {
        orm.selectAll('*', 'burgers', function(res){
            cb(res);
        });
    },

    create: function(vals, cb) {
        orm.insertOne('burgers', 'burger_name', vals, function(res){
            cb(res);
        });
    },

    update: function(colSetVal, condition, cb) {
        orm.updateOne('burgers', colSetVal, condition, function(res) {
            cb(res);
        });
    }
}

// Export for the controller
module.exports = burger;