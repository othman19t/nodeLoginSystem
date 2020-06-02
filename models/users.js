const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
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
    select: false,
  },
  password_confirm: {
    type: "string",
    required: [true, "Confirm password is required"],
    validate: {
      //this only works on create() and save() method
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same",
    },
  },
  photo: {
    type: "string",
  },
});
// hashing password
userSchema.pre("save", async function (next) {
  // only run when password was modified
  if (!this.isModified("password")) return next();
  // hash password
  this.password = await bcrypt.hash(this.password, 12);
  // assign  password_confirm to undefined
  this.password_confirm = undefined;
  next();
});

// comparing password
userSchema.methods.correctPassword =  async function (candidatePassword, userPassword) {
  return  await bcrypt.compare(candidatePassword, userPassword);
};
const Users = mongoose.model("User", userSchema);
module.exports = Users;
