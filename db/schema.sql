-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burger_db" database --
CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affect burger_db --
USE burgers_db;

-- Creates the table "burgers" within burger_db --
CREATE TABLE burgers (
    -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "burger_name" which cannot contain null --
  burger_name VARCHAR(200) NOT NULL,
  -- Makes a boolean column called "devoured" which cannot contain null --
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

