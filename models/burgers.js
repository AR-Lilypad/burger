// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// make object
const burgers =  { getBurger: function(cb){
  orm.selectAll("burgers", function(result){cb(result)})
}

}

  // Export the database functions for the controller (burgers_controller.js).
module.exports = burger;


// sequelize is an ORM so won't have to have an ORM 


// selectAll: function(tableInput, colToSearch, valOfCol) {
//   var queryString = "SELECT * FROM ?? WHERE ?? = ?";
// //   connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//     if (err) throw err;
//     console.log(result);
//   });