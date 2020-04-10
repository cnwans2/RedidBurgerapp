//this is where all the router connections are 
//we would have to create a handlebars objects
//create a post router, a get router, and a delete router
// this would all be used to call back the data from mysql
//then we have to export the file in the end

var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var burger_name= {
      burgers: data
    };
    console.log(burger.db);
    res.render("index", burger.db);
  });

  router.post("controllers\burgers.js", function(req, res) {
    burger.insertOne(
      ["burger_name", "devoured"],
      [req.body.burger_name, req.body.devoured],
      function(result) {

  router.put("controllers\burgers.js", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.updateOne({ devoured: req.body.devoured }, condition, function(
      result
    ) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  router.delete("controllers\burgers.js", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
});
module.exports = router;
  }