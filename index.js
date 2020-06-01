const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;



app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
