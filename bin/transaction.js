"use strict";

const murmuration = require("murmuration");

const Connection = require("./connection");

function transaction(configuration, migrationsDirectoryPath, callback) {
  Object.assign(configuration, {
    Connection
  });

  murmuration.transaction(configuration, migrationsDirectoryPath, callback);
}

module.exports = transaction;
