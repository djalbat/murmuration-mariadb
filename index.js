"use strict";

const murmuration = require("murmuration-temp");  ///

const migrate = require("./bin/migrate"),
      Connection = require("./bin/connection");

const { database, transaction } = murmuration;

module.exports = {
  migrate,
  database,
  Connection,
  transaction
};
