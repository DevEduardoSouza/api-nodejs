const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// DB connection
const connection = require("../src/db/conn");
connection();

// Routes
const routes = require("../src/routes/router");
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Servidor online na porta ${port}!`);
});
