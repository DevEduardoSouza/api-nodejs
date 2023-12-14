const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

// DB connection
const connection = require("../src/db/conn");
connection();

app.listen(3000, () => {
  console.log(`Servidor online na porta ${port}!`);
});
