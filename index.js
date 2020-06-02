require("./database/db");
const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;

const createUser = require("./controlers/createUser");
app.post("/users", createUser);

//handling errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});
app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
