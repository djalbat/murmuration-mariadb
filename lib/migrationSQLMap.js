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
const _createTable = /*#__PURE__*/ _interop_require_default(require("./sql/migration/createTable"));
const _insertVersion = /*#__PURE__*/ _interop_require_default(require("./sql/migration/insertVersion"));
const _showLikeTables = /*#__PURE__*/ _interop_require_default(require("./sql/migration/showLikeTables"));
const _selectMaximumVersion = /*#__PURE__*/ _interop_require_default(require("./sql/migration/selectMaximumVersion"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const migrationSQLMap = {
    createTableMigrationSQL: _createTable.default,
    insertVersionMigrationSQL: _insertVersion.default,
    showLikeTablesMigrationSQL: _showLikeTables.default,
    selectMaximumVersionMigrationSQL: _selectMaximumVersion.default
};
const _default = migrationSQLMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9taWdyYXRpb25TUUxNYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBjcmVhdGVUYWJsZU1pZ3JhdGlvblNRTCBmcm9tIFwiLi9zcWwvbWlncmF0aW9uL2NyZWF0ZVRhYmxlXCI7XG5pbXBvcnQgaW5zZXJ0VmVyc2lvbk1pZ3JhdGlvblNRTCBmcm9tIFwiLi9zcWwvbWlncmF0aW9uL2luc2VydFZlcnNpb25cIjtcbmltcG9ydCBzaG93TGlrZVRhYmxlc01pZ3JhdGlvblNRTCBmcm9tIFwiLi9zcWwvbWlncmF0aW9uL3Nob3dMaWtlVGFibGVzXCI7XG5pbXBvcnQgc2VsZWN0TWF4aW11bVZlcnNpb25NaWdyYXRpb25TUUwgZnJvbSBcIi4vc3FsL21pZ3JhdGlvbi9zZWxlY3RNYXhpbXVtVmVyc2lvblwiO1xuXG5jb25zdCBtaWdyYXRpb25TUUxNYXAgPSB7XG4gIGNyZWF0ZVRhYmxlTWlncmF0aW9uU1FMLFxuICBpbnNlcnRWZXJzaW9uTWlncmF0aW9uU1FMLFxuICBzaG93TGlrZVRhYmxlc01pZ3JhdGlvblNRTCxcbiAgc2VsZWN0TWF4aW11bVZlcnNpb25NaWdyYXRpb25TUUxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1pZ3JhdGlvblNRTE1hcDtcbiJdLCJuYW1lcyI6WyJtaWdyYXRpb25TUUxNYXAiLCJjcmVhdGVUYWJsZU1pZ3JhdGlvblNRTCIsImluc2VydFZlcnNpb25NaWdyYXRpb25TUUwiLCJzaG93TGlrZVRhYmxlc01pZ3JhdGlvblNRTCIsInNlbGVjdE1heGltdW1WZXJzaW9uTWlncmF0aW9uU1FMIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztvRUFab0M7c0VBQ0U7dUVBQ0M7NkVBQ007Ozs7OztBQUU3QyxNQUFNQSxrQkFBa0I7SUFDdEJDLHlCQUFBQSxvQkFBdUI7SUFDdkJDLDJCQUFBQSxzQkFBeUI7SUFDekJDLDRCQUFBQSx1QkFBMEI7SUFDMUJDLGtDQUFBQSw2QkFBZ0M7QUFDbEM7TUFFQSxXQUFlSiJ9