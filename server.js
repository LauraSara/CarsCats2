const express = require("express");
const app = express();
const port = 8000;

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');


app.get("/cars", function(request, response){
  response.render("cars");
});

app.get("/cats", function(request, response){
  response.render("cats");
});

app.get("/cars/new", function(request, response){
  response.render("form");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

