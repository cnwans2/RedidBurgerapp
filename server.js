var express = require("express");
ar exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8000;
var app = express();

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });