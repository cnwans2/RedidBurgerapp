var orm = require("../config/orm.js");

var burger = {
    //calling back all the orm functions that we has perviously set up
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },


  