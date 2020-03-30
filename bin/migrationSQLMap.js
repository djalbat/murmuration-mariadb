'use strict';

const createTableMigrationSQL = require('./sql/migration/createTable'),
      insertVersionMigrationSQL = require('./sql/migration/insertVersion'),
      showLikeTablesMigrationSQL = require('./sql/migration/showLikeTables'),
      selectMaximumVersionMigrationSQL = require('./sql/migration/selectMaximumVersion');

const migrationSQLMap = {
  createTableMigrationSQL,
  insertVersionMigrationSQL,
  showLikeTablesMigrationSQL,
  selectMaximumVersionMigrationSQL
};

module.exports = migrationSQLMap;
