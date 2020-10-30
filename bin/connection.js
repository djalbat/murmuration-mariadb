"use strict";

const mysql = require("mysql");

const { createPool } = mysql;

let pool = null;

class Connection {
  constructor(conn, log) {
    this.conn = conn;
    this.log = log;
  }

  getLog() {
    return this.log;
  }

  query(sql, parameters, callback) {
    this.conn.query(sql, parameters, (error, rows) => {
      if (error) {
        diagnoseError(error, sql, this.log);
      }

      callback(error, rows);
    });
  }

  release() {
    this.conn.release();
  }

  begin(callback) {
    this.conn.beginTransaction(callback);
  }

  commit(callback) {
    this.conn.commit(callback);
  }

  rollback(callback) {
    this.conn.rollback(callback);
  }

  static fromConfiguration(configuration, callback) {
    if (pool === null) {
      pool = createPool(configuration);
    }

    pool.getConnection((error, conn) => { ///
      const { log = defaultLog } = configuration;

      if (error) {
        const sql = null; ///

        conn = null;

        diagnoseError(error, sql, log);
      }

      error = null;

      const connection = new Connection(conn, log);

      callback(error, connection);
    });
  }
}

module.exports = Connection;

function diagnoseError(error, sql, log) {
  const { code } = error;

  log.error(`Error code '${code}'...`);

  switch(code) {
    case "ECONNREFUSED":
      log.error("The database isn't running, probably.");
      break;

    case "ENOTFOUND":
      log.error("The host is wrong, probably.");
      break;

    case "ER_BAD_DB_ERROR":
      log.error("The database name is wrong, probably.");
      break;

    case "ER_ACCESS_DENIED_ERROR":
      log.error("The username or the password are wrong, probably.");
      break;

    case "ETIMEOUT":
    case "PROTOCOL_SEQUENCE_TIMEOUT":
      log.error("The database server is down, probably.");
      break;

    default: {
        const { message } = error;

        log.error(message);

        if (sql) {
          log.error(`The offending SQL is: '${sql}'`);
        }
      }
      break;
  }
}

function defaultLog(message) {}

Object.assign(defaultLog, {
  trace: () => {},
  debug: () => {},
  info: () => {},
  warning: () => {},
  error: () => {},
  fatal: () => {},
});
