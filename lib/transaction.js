"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return transaction;
    }
});
var _murmuration = /*#__PURE__*/ _interop_require_default(require("murmuration"));
var _connection = /*#__PURE__*/ _interop_require_default(require("./connection"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function transaction(configuration, operations, callback, context) {
    Object.assign(configuration, {
        Connection: _connection.default
    });
    _murmuration.default.transaction(configuration, operations, callback, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc2FjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG11cm11cmF0aW9uIGZyb20gXCJtdXJtdXJhdGlvblwiO1xuXG5pbXBvcnQgQ29ubmVjdGlvbiBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zYWN0aW9uKGNvbmZpZ3VyYXRpb24sIG9wZXJhdGlvbnMsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gIE9iamVjdC5hc3NpZ24oY29uZmlndXJhdGlvbiwge1xuICAgIENvbm5lY3Rpb25cbiAgfSk7XG5cbiAgbXVybXVyYXRpb24udHJhbnNhY3Rpb24oY29uZmlndXJhdGlvbiwgb3BlcmF0aW9ucywgY2FsbGJhY2ssIGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbInRyYW5zYWN0aW9uIiwiY29uZmlndXJhdGlvbiIsIm9wZXJhdGlvbnMiLCJjYWxsYmFjayIsImNvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJDb25uZWN0aW9uIiwibXVybXVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7a0VBSkE7aUVBRUQ7Ozs7OztBQUVSLFNBQVNBLFlBQVlDLGFBQWEsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLE9BQU87SUFDOUVDLE9BQU9DLE1BQU0sQ0FBQ0wsZUFBZTtRQUMzQk0sWUFBQUEsbUJBQVU7SUFDWjtJQUVBQyxvQkFBVyxDQUFDUixXQUFXLENBQUNDLGVBQWVDLFlBQVlDLFVBQVVDO0FBQy9EIn0=