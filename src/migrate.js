"use strict";

import { migrate as baseMigrate } from "murmuration";

import Connection from "./connection";
import migrationSQLMap from "./migrationSQLMap";

export default function migrate(configuration, migrationsDirectoryPath, CustomMigrationMap, callback) {
  Object.assign(configuration, {
    Connection,
    migrationSQLMap
  });

  baseMigrate(configuration, migrationsDirectoryPath, CustomMigrationMap, callback);
}
