'use strict';

const createTableMigrationSQL = `

    CREATE TABLE \`migration\` (
      \`timestamp\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      \`version\` int(11) unsigned NOT NULL DEFAULT '0',
      PRIMARY KEY (\`version\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

`;

module.exports = createTableMigrationSQL;
