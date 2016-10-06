var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: {
    firstName: {type: String},
    lastName: {type: String}
  },
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

module.exports = mongoose.model("User", userSchema);
