// DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors");
const transactionsController = require("./controllers/transactionsController.js");

// Middleware
app.use(cors());

// Middleware to parse incoming JSON
app.use(express.json());

// Mounting the router
app.use("/transactions", transactionsController);

app.get("/", (req, res) => {
  res.send({
    status: true,
    code: 200,
    message: "Budgeting App Server"
  });
});

// EXPORT
module.exports = app;
