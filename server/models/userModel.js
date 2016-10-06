var mongoose = require("mongoose");

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
    teamMembers: {
      name: {type: String},
      position: {type: String}
    },
    location: {type: String, required: true}
  }

});

module.exports = mongoose.model("User", userSchema);
