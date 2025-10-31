"use strict";

import { transaction as baseTransaction } from "murmuration";

import Connection from "./connection";

export default function transaction(configuration, operations, callback, context) {
  Object.assign(configuration, {
    Connection
  });

  baseTransaction(configuration, operations, callback, context);
}
