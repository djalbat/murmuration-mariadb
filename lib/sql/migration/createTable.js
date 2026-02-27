"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const createTableMigrationSQL = `

    CREATE TABLE \`migration\` (
      \`timestamp\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      \`version\` int(11) unsigned NOT NULL DEFAULT '0',
      PRIMARY KEY (\`version\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

`;
const _default = createTableMigrationSQL;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcWwvbWlncmF0aW9uL2NyZWF0ZVRhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjcmVhdGVUYWJsZU1pZ3JhdGlvblNRTCA9IGBcblxuICAgIENSRUFURSBUQUJMRSBcXGBtaWdyYXRpb25cXGAgKFxuICAgICAgXFxgdGltZXN0YW1wXFxgIHRpbWVzdGFtcCBOT1QgTlVMTCBERUZBVUxUIENVUlJFTlRfVElNRVNUQU1QIE9OIFVQREFURSBDVVJSRU5UX1RJTUVTVEFNUCxcbiAgICAgIFxcYHZlcnNpb25cXGAgaW50KDExKSB1bnNpZ25lZCBOT1QgTlVMTCBERUZBVUxUICcwJyxcbiAgICAgIFBSSU1BUlkgS0VZIChcXGB2ZXJzaW9uXFxgKVxuICAgICkgRU5HSU5FPUlubm9EQiBERUZBVUxUIENIQVJTRVQ9dXRmODtcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFibGVNaWdyYXRpb25TUUw7XG4iXSwibmFtZXMiOlsiY3JlYXRlVGFibGVNaWdyYXRpb25TUUwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O0FBVkEsTUFBTUEsMEJBQTBCLENBQUM7Ozs7Ozs7O0FBUWpDLENBQUM7TUFFRCxXQUFlQSJ9