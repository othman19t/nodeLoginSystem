const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: "string",
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Email is not valid"],
    unique: true,
    trim: true,
    lower: true,
  },
  password: {
    type: "string",
    required: [true, "Password is required"],
    minlength: 8,
  },
  password_confirm: {
    type: "string",
    required: [true, "Confirm password is required"],
    minlength: 8,
  },
  photo: {
    type: "string",
  },
});
const Users = mongoose.model("User", userSchema);
module.exports = Users;
