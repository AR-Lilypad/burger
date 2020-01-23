// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// make object
const burgers = {
 all: function(cb) {
    orm.all("burgers", function(result) {
      cb(result);
    });
  },

  // Add a new burger to the db.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // Change the devoured status to true.
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  // Delete a burger from the db.
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burgers;

// sequelize is an ORM so won't have to have an ORM

// selectAll: function(tableInput, colToSearch, valOfCol) {
//   var queryString = "SELECT * FROM ?? WHERE ?? = ?";
// //   connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
