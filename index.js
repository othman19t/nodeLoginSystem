require("./database/db");
const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;

const createUser = require("./controlers/createUser");
app.post("/users", createUser);

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
