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
var _murmuration = require("murmuration");
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
    (0, _murmuration.transaction)(configuration, operations, callback, context);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc2FjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdHJhbnNhY3Rpb24gYXMgYmFzZVRyYW5zYWN0aW9uIH0gZnJvbSBcIm11cm11cmF0aW9uXCI7XG5cbmltcG9ydCBDb25uZWN0aW9uIGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNhY3Rpb24oY29uZmlndXJhdGlvbiwgb3BlcmF0aW9ucywgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgT2JqZWN0LmFzc2lnbihjb25maWd1cmF0aW9uLCB7XG4gICAgQ29ubmVjdGlvblxuICB9KTtcblxuICBiYXNlVHJhbnNhY3Rpb24oY29uZmlndXJhdGlvbiwgb3BlcmF0aW9ucywgY2FsbGJhY2ssIGNvbnRleHQpO1xufVxuIl0sIm5hbWVzIjpbInRyYW5zYWN0aW9uIiwiY29uZmlndXJhdGlvbiIsIm9wZXJhdGlvbnMiLCJjYWxsYmFjayIsImNvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJDb25uZWN0aW9uIiwiYmFzZVRyYW5zYWN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzJCQUp1QjtpRUFFeEI7Ozs7OztBQUVSLFNBQVNBLFlBQVlDLGFBQWEsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLE9BQU87SUFDOUVDLE9BQU9DLE1BQU0sQ0FBQ0wsZUFBZTtRQUMzQk0sWUFBQUEsbUJBQVU7SUFDWjtJQUVBQyxJQUFBQSx3QkFBZSxFQUFDUCxlQUFlQyxZQUFZQyxVQUFVQztBQUN2RCJ9