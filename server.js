var express = require("express");
ar exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3360;
var app = express();

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });

  //we have to set up a port so that it can be deployed on heroku 
  //use to see to check if ther server is running and its connected 
  //we have to parse the json 
  //set up the handle bars 
  //plug in the routes that we wil be using laster 