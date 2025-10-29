"use strict";

import murmuration from "murmuration";

import Connection from "./connection";

export default function transaction(configuration, operations, callback, context) {
  Object.assign(configuration, {
    Connection
  });

  murmuration.transaction(configuration, operations, callback, context);
}
