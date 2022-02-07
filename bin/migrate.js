"use strict";

const murmuration = require("murmuration");

const Connection = require("./connection"),
      migrationSQLMap = require("./migrationSQLMap");

function migrate(configuration, migrationsDirectoryPath, CustomMigrationMap, callback) {
  Object.assign(configuration, {
    Connection,
    migrationSQLMap
  });

  murmuration.migrate(configuration, migrationsDirectoryPath, CustomMigrationMap, callback);
}

module.exports = migrate;
