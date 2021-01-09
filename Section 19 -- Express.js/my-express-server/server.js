const express = require('express');

const app = express();

app.get("/", function(request, response){

  response.send("What's up danger")
});

app.get("/about", function(request, response){

  response.send("This would be the about page")
});


app.listen(3000, function(){
  console.log("Server started on port 3000");


});
