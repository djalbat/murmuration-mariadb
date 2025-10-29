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
var _murmuration = /*#__PURE__*/ _interop_require_default(require("murmuration"));
var _connection = /*#__PURE__*/ _interop_require_default(require("./connection"));
var _migrationSQLMap = /*#__PURE__*/ _interop_require_default(require("./migrationSQLMap"));
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
    _murmuration.default.migrate(configuration, migrationsDirectoryPath, CustomMigrationMap, callback);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taWdyYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbXVybXVyYXRpb24gZnJvbSBcIm11cm11cmF0aW9uXCI7XG5cbmltcG9ydCBDb25uZWN0aW9uIGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcbmltcG9ydCBtaWdyYXRpb25TUUxNYXAgZnJvbSBcIi4vbWlncmF0aW9uU1FMTWFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pZ3JhdGUoY29uZmlndXJhdGlvbiwgbWlncmF0aW9uc0RpcmVjdG9yeVBhdGgsIEN1c3RvbU1pZ3JhdGlvbk1hcCwgY2FsbGJhY2spIHtcbiAgT2JqZWN0LmFzc2lnbihjb25maWd1cmF0aW9uLCB7XG4gICAgQ29ubmVjdGlvbixcbiAgICBtaWdyYXRpb25TUUxNYXBcbiAgfSk7XG5cbiAgbXVybXVyYXRpb24ubWlncmF0ZShjb25maWd1cmF0aW9uLCBtaWdyYXRpb25zRGlyZWN0b3J5UGF0aCwgQ3VzdG9tTWlncmF0aW9uTWFwLCBjYWxsYmFjayk7XG59XG4iXSwibmFtZXMiOlsibWlncmF0ZSIsImNvbmZpZ3VyYXRpb24iLCJtaWdyYXRpb25zRGlyZWN0b3J5UGF0aCIsIkN1c3RvbU1pZ3JhdGlvbk1hcCIsImNhbGxiYWNrIiwiT2JqZWN0IiwiYXNzaWduIiwiQ29ubmVjdGlvbiIsIm1pZ3JhdGlvblNRTE1hcCIsIm11cm11cmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXdCQTs7O2tFQUxBO2lFQUVEO3NFQUNLOzs7Ozs7QUFFYixTQUFTQSxRQUFRQyxhQUFhLEVBQUVDLHVCQUF1QixFQUFFQyxrQkFBa0IsRUFBRUMsUUFBUTtJQUNsR0MsT0FBT0MsTUFBTSxDQUFDTCxlQUFlO1FBQzNCTSxZQUFBQSxtQkFBVTtRQUNWQyxpQkFBQUEsd0JBQWU7SUFDakI7SUFFQUMsb0JBQVcsQ0FBQ1QsT0FBTyxDQUFDQyxlQUFlQyx5QkFBeUJDLG9CQUFvQkM7QUFDbEYifQ==