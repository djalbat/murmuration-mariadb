"use strict";

const murmuration = require("murmuration");

const Connection = require("./connection");

function transaction(configuration, operations, callback, context) {
  Object.assign(configuration, {
    Connection
  });

  murmuration.transaction(configuration, operations, callback, context);
}

module.exports = transaction;
