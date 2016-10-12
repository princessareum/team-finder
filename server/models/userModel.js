var mongoose = require("mongoose");
var bcrypt = require("bcryptjs")

var userSchema = new mongoose.Schema({
  name: {
    firstName: {type: String},
    lastName: {type: String}
  },
  username: {type: String, required: true, unique:true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  profile: {
    description: {type: String},
    gender: {type: String},
    teamSport: {type: String},
    teamName: {type: String},
    numberOfTeamMembers: {type: Number},
    teamMembers: [{
      name: {type: String},
      position: {type: String}
    }],
    location: {type: String, required: true}
  }

});

userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(7), null);
};


userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
