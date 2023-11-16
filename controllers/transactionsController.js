const express = require("express");
const transactionRouter = express.Router();
// const { v4: uuidv4 } = require("uuid");
const transactionArray = require("../models/dataFile");

transactionRouter.use(express.json());

// get all transactions
transactionRouter.get("/", (req, res, next) => {
  try {
    if (transactionArray[0]) {
      res.status(200).send(transactionArray);
    } else {
      res.status(404).send({ message: "Transactions were not found." });
    }
  } catch (error) {
    next(error);
  }
});

// get transactions by id (show)
transactionRouter.get("/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    const transaction = transactionArray.find(
      (item) => item.id === parseInt(id)
    );

    if (transaction) {
      res.status(200).send(transaction);
    } else {
      res.status(404).send({ message: "Could not find transaction" });
    }
  } catch (error) {
    next(error);
  }
});

// create transaction (POST)
transactionRouter.post("/", (req, res) => {
  try {
    const transactionBody = req.body;
    if (transactionBody) {
      transactionArray.push(transactionBody);
      res.status(201).send(transactionBody);
    } else {
      res.status(404).send({
        status: false,
        code: 404,
        message: "Transaction was not created."
      });
    }
  } catch (error) {
    next(error);
  }
});

// update transaction PUT
transactionRouter.put("/:id", (req, res, next) => {
  try {
    const transactionId = parseInt(req.params.id);
    const updateTransaction = req.body;
    const transactionIndex = transactionArray.findIndex(
      ({ item }) => item.id === transactionId
    );

    if (transactionIndex === -1) {
      res.status(404).send({ message: "Transaction not found" });
    }

    // takes the trans from database (trans.Array) matching the index
    const currentTransaction = transactionArray[transactionIndex];

    // loop through the requested transaction
    for (let key in updateTransaction) {
      if (currentTransaction.hasOwnProperty([key])) {
        currentTransaction[key] = updateTransaction[key]; // from the request
      }
    }

    // update the transaction in the array of trans...data.js
    transactionArray[transactionIndex] = currentTransaction;

    res.send(currentTransaction);
  } catch (error) {
    next(error);
  }
});

// DELETE transaction by ID
transactionRouter.delete("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const itemIndex = transactionArray.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      return res.status(404).send({ message: "Item not found" });
    }

    const deletedItem = transactionArray.splice(itemIndex, 1);

    res.send(deletedItem[0]);
  } catch (error) {
    next(error);
  }
});
module.exports = transactionRouter;
