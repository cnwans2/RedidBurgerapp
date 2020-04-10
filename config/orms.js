var connection = require("../config/connection");
// after this you have to run a connection qurey to the database.
//then you have to use a call back function to call back the connection to the database
//using the insert function to insert the table into the fucntion that we made with the databae
// create an update function, to update the user inputs
// making sure that the database is connected as well

function createquestionmark (num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function translateSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function(table, cb) {
    var dbQuery = "SELECT * FROM " + table + burger_name;

    connection.query(burger.db, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var dbQuery =
      "INSERT INTO " +
      table +
      " (" +
      cols.toString() +
      ") " +
      "VALUES (" +
      createquestionmark(vals.length) +
      ") ";

    console.log(burger.db);
    connection.query(dbQuery, vals, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  updateOne: function(table, objColVals, condition, cb) {
    var dbQuery =
      "UPDATE " +
      table +
      " SET " +
      translateSql(objColVals) +
      " WHERE " +
      condition;

    console.log(burger.db);

    connection.query(dbQuery, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },
  deleteOne: function(table, condition, cb) {
    var dbQuery = "DELETE FROM " + table + " WHERE " + condition;
    console.log(burger.db);

    connection.query(dbQuery, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  }
};
module.exports = orm;