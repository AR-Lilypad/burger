// Object Relational Mapping
// and asychornus functions

let connection = require("./connection.js");         //if error check / or ./ or neither
// write the query in mysql workbench first and then add it here

// find all
// orm.selectAll("";)

// find ___ in the table
// orm.insertOne("");

//find 
// orm.updateOne("");

let orm = {
    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    selectInsertOne: function (table, tableInput, cb) {
        let queryString = "INSERT INTO" + table;
        console.log(queryString);
        connection.query(queryString, [table, tableInput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, tableInput, cb) {
        let queryString = "UPDATE" + table;
         //   "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;
