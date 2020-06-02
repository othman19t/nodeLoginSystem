const jwt = require("jsonwebtoken");
const User = require("./../models/users");
const catchAsync = require("./../errors/catchAsync");

module.exports = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    password_confirm: req.body.password_confirm,
  });

  // log the user in as soon as they signUp
  const token = jwt.sign(
    { id: newUser._id },
    "this-is-my-secret-this-should-be-32-characters-long",
    { expiresIn: "90d" }
  );

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});
