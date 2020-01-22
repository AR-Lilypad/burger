// Object Relational Mapping
// and asychornus functions

let connection = require("../config/connection.js"); //if error check / or ./ or neither
// write the query in mysql workbench first and then add it here

// find all
// orm.selectAll("";)

// find ___ in the table
// orm.insertOne("");

//find
// orm.updateOne("");

let orm = {
  selectAll: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(table, value, cb) {
    // var queryString = "INSERT INTO " + table + " (" + column + ") VALUES ?";
    let queryString = "INSERT INTO " + table + " SET ?";
    connection.query(queryString, value, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(table, condition, id, cb) {
    let queryString = "UPDATE " + table + " SET " + condition + " WHERE id = ?";
    connection.query(queryString, id, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
