'use strict';

const selectMaximumVersionMigrationSQL = `

    SELECT MAX(\`version\`) AS \`maximum_version\` FROM \`migration\`;

`;

module.exports = selectMaximumVersionMigrationSQL;
