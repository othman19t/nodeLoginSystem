const User = require("./../models/users");
const catchAsync = require("./../errors/catchAsync");

module.exports = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    password_confirm: req.body.password_confirm,
  });
  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});
