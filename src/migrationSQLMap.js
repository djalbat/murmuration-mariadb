"use strict";

import createTableMigrationSQL from "./sql/migration/createTable";
import insertVersionMigrationSQL from "./sql/migration/insertVersion";
import showLikeTablesMigrationSQL from "./sql/migration/showLikeTables";
import selectMaximumVersionMigrationSQL from "./sql/migration/selectMaximumVersion";

const migrationSQLMap = {
  createTableMigrationSQL,
  insertVersionMigrationSQL,
  showLikeTablesMigrationSQL,
  selectMaximumVersionMigrationSQL
};

export default migrationSQLMap;
