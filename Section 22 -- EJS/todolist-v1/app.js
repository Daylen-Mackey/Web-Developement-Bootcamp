//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){

    var today = new Date();
    if (today.getDay() ===6 || today.getDay() === 0){
        // res.send("<h1>It's the weekend</h1>")
        res.sendFile(__dirname + "/index.html")
    }
    else {

  res.send("<h1>It's not the weekend :( </h1>");

    }
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
