"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return migrate;
    }
});
const _murmuration = require("murmuration");
const _connection = /*#__PURE__*/ _interop_require_default(require("./connection"));
const _migrationSQLMap = /*#__PURE__*/ _interop_require_default(require("./migrationSQLMap"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function migrate(configuration, migrationsDirectoryPath, CustomMigrationMap, callback) {
    Object.assign(configuration, {
        Connection: _connection.default,
        migrationSQLMap: _migrationSQLMap.default
    });
    (0, _murmuration.migrate)(configuration, migrationsDirectoryPath, CustomMigrationMap, callback);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taWdyYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtaWdyYXRlIGFzIGJhc2VNaWdyYXRlIH0gZnJvbSBcIm11cm11cmF0aW9uXCI7XG5cbmltcG9ydCBDb25uZWN0aW9uIGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcbmltcG9ydCBtaWdyYXRpb25TUUxNYXAgZnJvbSBcIi4vbWlncmF0aW9uU1FMTWFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pZ3JhdGUoY29uZmlndXJhdGlvbiwgbWlncmF0aW9uc0RpcmVjdG9yeVBhdGgsIEN1c3RvbU1pZ3JhdGlvbk1hcCwgY2FsbGJhY2spIHtcbiAgT2JqZWN0LmFzc2lnbihjb25maWd1cmF0aW9uLCB7XG4gICAgQ29ubmVjdGlvbixcbiAgICBtaWdyYXRpb25TUUxNYXBcbiAgfSk7XG5cbiAgYmFzZU1pZ3JhdGUoY29uZmlndXJhdGlvbiwgbWlncmF0aW9uc0RpcmVjdG9yeVBhdGgsIEN1c3RvbU1pZ3JhdGlvbk1hcCwgY2FsbGJhY2spO1xufVxuIl0sIm5hbWVzIjpbIm1pZ3JhdGUiLCJjb25maWd1cmF0aW9uIiwibWlncmF0aW9uc0RpcmVjdG9yeVBhdGgiLCJDdXN0b21NaWdyYXRpb25NYXAiLCJjYWxsYmFjayIsIk9iamVjdCIsImFzc2lnbiIsIkNvbm5lY3Rpb24iLCJtaWdyYXRpb25TUUxNYXAiLCJiYXNlTWlncmF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUF3QkE7Ozs2QkFMZTttRUFFaEI7d0VBQ0s7Ozs7OztBQUViLFNBQVNBLFFBQVFDLGFBQWEsRUFBRUMsdUJBQXVCLEVBQUVDLGtCQUFrQixFQUFFQyxRQUFRO0lBQ2xHQyxPQUFPQyxNQUFNLENBQUNMLGVBQWU7UUFDM0JNLFlBQUFBLG1CQUFVO1FBQ1ZDLGlCQUFBQSx3QkFBZTtJQUNqQjtJQUVBQyxJQUFBQSxvQkFBVyxFQUFDUixlQUFlQyx5QkFBeUJDLG9CQUFvQkM7QUFDMUUifQ==