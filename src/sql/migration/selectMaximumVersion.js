"use strict";

const selectMaximumVersionMigrationSQL = `

    SELECT MAX(\`version\`) AS \`maximum_version\` FROM \`migration\`;

`;

export default selectMaximumVersionMigrationSQL;
