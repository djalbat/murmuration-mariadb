'use strict';

const insertVersionMigrationSQL = `

    INSERT INTO \`migration\` (\`version\`) VALUES(?);

`;

module.exports = insertVersionMigrationSQL;
