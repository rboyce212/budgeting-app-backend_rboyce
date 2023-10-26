const express = require("express");
const transactionRouter = express.Router();
const { v4: uuidv4 } = require("uuid");
const transactionArray = require("../models/dataFile");

transactionRouter.use(express.json());

// get all transactions
transactionsRouter.get("/", (req, res, next) => {
  try {
    if (transactionArray && transactionArray.length > 0) {
      res.status(200).send(transactionArray);
    } else {
      res
        .status(404)
        .send({
          status: false,
          code: 404,
          message: "Transactions were not found."
        });
    }
  } catch (error) {
    next(error);
  }
});

// get transactions by id (show)
transactionsRouter.get("/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    const transaction = transactionArray.find(
      (item) => item.id === parseInt(id)
    );

    if (transaction) {
      res.status(200).send(transaction);
    } else {
      res
        .status(404)
        .send({ status: false, code: 404, message: "Transaction not found." });
    }
  } catch (error) {
    next(error);
  }
});
