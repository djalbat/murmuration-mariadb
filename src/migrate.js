"use strict";

import murmuration from "murmuration";

import Connection from "./connection";
import migrationSQLMap from "./migrationSQLMap";

export default function migrate(configuration, migrationsDirectoryPath, CustomMigrationMap, callback) {
  Object.assign(configuration, {
    Connection,
    migrationSQLMap
  });

  murmuration.migrate(configuration, migrationsDirectoryPath, CustomMigrationMap, callback);
}
