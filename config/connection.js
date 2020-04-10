var mysql = require("mysql");

 var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port:3306
    database: "burgers_db",
    get database() {
        return this._database;
    },
    set database(value) {
        this._database = value;
    },
  });

module.exports = connection;