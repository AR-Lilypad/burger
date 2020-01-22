// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// make object
const burgers = {
  getBurger: function(cb) {
    orm.selectAll("burgers", function(result) {
      cb(result);
    });
  },

  // Add a new burger to the db.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // Change the devoured status to true.
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  // Delete a burger from the db.
  deleteOne: function(condition, cb) {
    orm.deleteOne("burgers", condition, function(res) {
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
