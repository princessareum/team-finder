var express = require("express");
var expressSession = require("express-session");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");


var config = require("./serverConfig.js");

var app = express();

app.use(express.static(__dirname+'/TeamFinder'));
app.use(bodyParser.json());

var userCtrl = require("./backControllers/userCtrl");



//end points

//User
app.post("/api/user", userCtrl.CreateUser);
app.get("/api/user", userCtrl.GetUser);
app.put("/api/user/:id", userCtrl.UpdateUser);
app.delete("/api/user/:id", userCtrl.DeleteUser);










//mongoose connection
var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.set("debug", true);
mongoose.connect(mongoURI, function(err){
  if(err){
    console.log(err);
  } else{
    console.log("mongoose is ready");
  }
});
mongoose.connection.once("open", function(){
  console.log("Connected to MongoDB at", mongoURI);
  app.listen(port, function(){
    console.log("Listening on port " + port);
  });
});
