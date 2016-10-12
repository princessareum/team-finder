var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");


var sessionKey = require("./sessionKey.js");
var config = require("./serverConfig.js");

var app = express();

app.use(express.static(__dirname+'/TeamFinder'));
app.use(bodyParser.json());


// backend controllers
var userCtrl = require("./backControllers/userCtrl");










require('./passport.js')(passport);
app.use(session({
  secret: sessionKey.secret,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


//auth
app.post('/auth', function(req, res, next){

  next();
}, passport.authenticate('local-signup'), function(req, res){
  res.send({login: true, user: req.user});
})



//end points

//User
app.post("/api/user", userCtrl.CreateUser);
app.get("/api/user", userCtrl.GetUser);
app.put("/api/user/:id", userCtrl.UpdateUser);
app.delete("/api/user/:id", userCtrl.DeleteUser);
app.post("/api/user/login", userCtrl.Login);
app.get("/api/user/logout", userCtrl.Logout);










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
