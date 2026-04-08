const express = require("express");
const cors = require("cors");
const amanteRoutes = require("./routes/amanteRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", amanteRoutes);

module.exports = app;