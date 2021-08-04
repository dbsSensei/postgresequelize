const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = process.env.PORT;

const routes_v1 = require("./routes/v1");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/v1", routes_v1);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
