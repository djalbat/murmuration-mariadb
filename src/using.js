"use strict";

import Statement from "./statement";

export default function using(connection) {
  const statement = Statement.fromConnection(connection);

  return statement;
}
