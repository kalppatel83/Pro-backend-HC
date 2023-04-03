const express = require("express");

const app = express();
const PORT = 4000 || process.env.PORT;
app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World</h1>");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
