// DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors");
const transactionsController = require("./controllers/transactionsController.js");
app.use(cors());

// Middleware to parse incoming JSON
app.use(express.json());

// Mounting the router
app.use("/transactions", transactionsController);

app.get("/", (req, res) => {
  res.send({
    status: true,
    code: 200,
    message: "<h1>Budgeting App Server</h1>"
  });
});

// EXPORT
module.exports = app;
