var mysql = require("mysql");

 var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port:3306
    database: "burgers_db"
  });

module.exports = connection;