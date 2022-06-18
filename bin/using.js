"use strict";

const Statement = require("./statement");

function using(connection) {
  const statement = Statement.fromConnection(connection);

  return statement;
}

module.exports = using;
