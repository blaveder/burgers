var connection = require('./connection.js');

var orm = {

    selectAll: function (tableInput, cb) {
        var queryString = " SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) { throw err };
            cb(result);
        });
    },

    insertOne: function (tableInput, eaten, cb) {
        var queryString = 'INSERT INTO ' + tableInput + "(burger_name) VALUES ('" + eaten + "');"
        console.log(queryString);

        connection.query(queryString, eaten, function (err, res) {
            if (err) throw err;


            cb(res);
        })
    },


    //value = eaten or not
    updateOne: function (tableInput, condition, cb) {

        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }

};

module.exports = orm;