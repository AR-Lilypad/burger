// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

module.exports = function(sequelize, DataTypes) {
    let Burgers = sequelize.define("Burgers", {
        text: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a burgers from being entered if it doesn't
            // have a text value
            allowNull: false,
            // len is a validation that checks that our todo is between 1 and 140 characters
            validate: {
              len: [1, 140]
            }
          },
          complete: {
            type: DataTypes.BOOLEAN,
            // defaultValue is a flag that defaults a new burgers complete value to false if
            // it isn't supplied one
            defaultValue: false
          }
        });
    return Burgers;
  };

  // Export the database functions for the controller (burgers_controller.js).
module.exports = burger;