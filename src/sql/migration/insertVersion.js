"use strict";

const insertVersionMigrationSQL = `

    INSERT INTO \`migration\` (\`version\`) VALUES(?);

`;

export default insertVersionMigrationSQL;
