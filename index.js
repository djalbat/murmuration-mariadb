"use strict";

const murmuration = require("murmuration");

const migrate = require("./bin/migrate"),
      Connection = require("./bin/connection"),
      transaction = require("./bin/transaction");

const { database } = murmuration;

module.exports = {
  database,
  migrate,
  Connection,
  transaction
};
