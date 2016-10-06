var express = require("express");
var expressSession = require("express-session");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");


var config = require("./serverConfig.js")

var app = express();

app.use(express.static(__dirname+'/TeamFinder'));
app.use(bodyParser.json());


//mongoose connection
var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.set("debug", true);
mongoose.connect(mongoURI, (err)=>{
  if(err){
    console.log(err);
  } else{
    console.log("mongoose is ready");
  }
});
mongoose.connection.once("open", ()=>{
  console.log("Connected to MongoDB at", mongoURI);
  app.listen(port, ()=>{
    console.log("Listening on port " + port);
  });
});
