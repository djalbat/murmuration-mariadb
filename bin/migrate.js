'use strict';

const murmuration = require('../../murmuration');

const Connection = require('./connection'),
      migrationSQLMap = require('./migrationSQLMap');

function migrate(configuration, migrationsDirectoryPath, callback) {
  Object.assign(configuration, {
    Connection,
    migrationSQLMap
  });

  murmuration.migrate(configuration, migrationsDirectoryPath, callback);
}

module.exports = migrate;
