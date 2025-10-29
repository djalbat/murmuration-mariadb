"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Statement;
    }
});
var _murmuration = require("murmuration");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var camelCaseToSnakeCase = _murmuration.caseUtilities.camelCaseToSnakeCase, snakeCaseToCamelCase = _murmuration.caseUtilities.snakeCaseToCamelCase;
var Statement = /*#__PURE__*/ function(BaseStatement) {
    _inherits(Statement, BaseStatement);
    function Statement() {
        _class_call_check(this, Statement);
        return _call_super(this, Statement, arguments);
    }
    _create_class(Statement, [
        {
            key: "update",
            value: function update(relation) {
                var sql = "UPDATE `".concat(relation, "`");
                this.setSQL(sql);
                return this;
            }
        },
        {
            key: "insertInto",
            value: function insertInto(relation) {
                var sql = "INSERT INTO `".concat(relation, "`");
                this.setSQL(sql);
                return this;
            }
        },
        {
            key: "deleteFrom",
            value: function deleteFrom(relation) {
                var sql = "DELETE FROM `".concat(relation, "`");
                this.setSQL(sql);
                return this;
            }
        },
        {
            key: "selectFrom",
            value: function selectFrom(relation) {
                var sql = "SELECT * FROM `".concat(relation, "`"), query = true;
                this.setSQL(sql);
                this.setQuery(query);
                return this;
            }
        },
        {
            key: "placeholder",
            value: function placeholder() {
                var placeholder = "?";
                return placeholder;
            }
        },
        {
            key: "columnFromKey",
            value: function columnFromKey(key) {
                var column = "`".concat(camelCaseToSnakeCase(key), "`");
                return column;
            }
        },
        {
            key: "keyFromColumn",
            value: function keyFromColumn(column) {
                var key = snakeCaseToCamelCase(column);
                return key;
            }
        }
    ], [
        {
            key: "fromConnection",
            value: function fromConnection(Class, connection) {
                if (connection === undefined) {
                    connection = Class; ///
                    Class = Statement;
                }
                var sql = null, query = false, parameters = [], oneHandler = null, noneHandler = null, manyHandler = null, elseHandler = null, firstHandler = null, errorHandler = null, successHandler = null, statement = new Class(connection, sql, query, parameters, oneHandler, noneHandler, manyHandler, elseHandler, firstHandler, errorHandler, successHandler);
                return statement;
            }
        }
    ]);
    return Statement;
}(_murmuration.Statement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFN0YXRlbWVudCBhcyBCYXNlU3RhdGVtZW50LCBjYXNlVXRpbGl0aWVzIH0gZnJvbSBcIm11cm11cmF0aW9uXCI7XG5cbmNvbnN0IHsgY2FtZWxDYXNlVG9TbmFrZUNhc2UsIHNuYWtlQ2FzZVRvQ2FtZWxDYXNlIH0gPSBjYXNlVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnQgZXh0ZW5kcyBCYXNlU3RhdGVtZW50IHtcbiAgdXBkYXRlKHJlbGF0aW9uKSB7XG4gICAgY29uc3Qgc3FsID0gYFVQREFURSBcXGAke3JlbGF0aW9ufVxcYGA7XG5cbiAgICB0aGlzLnNldFNRTChzcWwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbnNlcnRJbnRvKHJlbGF0aW9uKSB7XG4gICAgY29uc3Qgc3FsID0gYElOU0VSVCBJTlRPIFxcYCR7cmVsYXRpb259XFxgYDtcblxuICAgIHRoaXMuc2V0U1FMKHNxbCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlbGV0ZUZyb20ocmVsYXRpb24pIHtcbiAgICBjb25zdCBzcWwgPSBgREVMRVRFIEZST00gXFxgJHtyZWxhdGlvbn1cXGBgO1xuXG4gICAgdGhpcy5zZXRTUUwoc3FsKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2VsZWN0RnJvbShyZWxhdGlvbikge1xuICAgIGNvbnN0IHNxbCA9IGBTRUxFQ1QgKiBGUk9NIFxcYCR7cmVsYXRpb259XFxgYCxcbiAgICAgICAgICBxdWVyeSA9IHRydWU7XG5cbiAgICB0aGlzLnNldFNRTChzcWwpO1xuXG4gICAgdGhpcy5zZXRRdWVyeShxdWVyeSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBsYWNlaG9sZGVyKCkge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gXCI/XCI7XG5cbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gIH1cblxuICBjb2x1bW5Gcm9tS2V5KGtleSkge1xuICAgIGNvbnN0IGNvbHVtbiA9IGBcXGAke2NhbWVsQ2FzZVRvU25ha2VDYXNlKGtleSl9XFxgYDtcblxuICAgIHJldHVybiBjb2x1bW47XG4gIH1cblxuICBrZXlGcm9tQ29sdW1uKGNvbHVtbikge1xuICAgIGNvbnN0IGtleSA9IHNuYWtlQ2FzZVRvQ2FtZWxDYXNlKGNvbHVtbik7XG5cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25uZWN0aW9uKENsYXNzLCBjb25uZWN0aW9uKSB7XG4gICAgaWYgKGNvbm5lY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29ubmVjdGlvbiA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBTdGF0ZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc3FsID0gbnVsbCxcbiAgICAgICAgICBxdWVyeSA9IGZhbHNlLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBbXSxcbiAgICAgICAgICBvbmVIYW5kbGVyID0gbnVsbCxcbiAgICAgICAgICBub25lSGFuZGxlciA9IG51bGwsXG4gICAgICAgICAgbWFueUhhbmRsZXIgPSBudWxsLFxuICAgICAgICAgIGVsc2VIYW5kbGVyID0gbnVsbCxcbiAgICAgICAgICBmaXJzdEhhbmRsZXIgPSBudWxsLFxuICAgICAgICAgIGVycm9ySGFuZGxlciA9IG51bGwsXG4gICAgICAgICAgc3VjY2Vzc0hhbmRsZXIgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBDbGFzcyhjb25uZWN0aW9uLCBzcWwsIHF1ZXJ5LCBwYXJhbWV0ZXJzLCBvbmVIYW5kbGVyLCBub25lSGFuZGxlciwgbWFueUhhbmRsZXIsIGVsc2VIYW5kbGVyLCBmaXJzdEhhbmRsZXIsIGVycm9ySGFuZGxlciwgc3VjY2Vzc0hhbmRsZXIpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudCIsImNhbWVsQ2FzZVRvU25ha2VDYXNlIiwiY2FzZVV0aWxpdGllcyIsInNuYWtlQ2FzZVRvQ2FtZWxDYXNlIiwidXBkYXRlIiwicmVsYXRpb24iLCJzcWwiLCJzZXRTUUwiLCJpbnNlcnRJbnRvIiwiZGVsZXRlRnJvbSIsInNlbGVjdEZyb20iLCJxdWVyeSIsInNldFF1ZXJ5IiwicGxhY2Vob2xkZXIiLCJjb2x1bW5Gcm9tS2V5Iiwia2V5IiwiY29sdW1uIiwia2V5RnJvbUNvbHVtbiIsImZyb21Db25uZWN0aW9uIiwiQ2xhc3MiLCJjb25uZWN0aW9uIiwidW5kZWZpbmVkIiwicGFyYW1ldGVycyIsIm9uZUhhbmRsZXIiLCJub25lSGFuZGxlciIsIm1hbnlIYW5kbGVyIiwiZWxzZUhhbmRsZXIiLCJmaXJzdEhhbmRsZXIiLCJlcnJvckhhbmRsZXIiLCJzdWNjZXNzSGFuZGxlciIsInN0YXRlbWVudCIsIkJhc2VTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJCQUpxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUQsSUFBUUMsdUJBQStDQywwQkFBYSxDQUE1REQsc0JBQXNCRSx1QkFBeUJELDBCQUFhLENBQXRDQztBQUVmLElBQUEsQUFBTUgsMEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxRQUFRO2dCQUNiLElBQU1DLE1BQU0sQUFBQyxXQUFvQixPQUFURCxVQUFTO2dCQUVqQyxJQUFJLENBQUNFLE1BQU0sQ0FBQ0Q7Z0JBRVosT0FBTyxJQUFJO1lBQ2I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0gsUUFBUTtnQkFDakIsSUFBTUMsTUFBTSxBQUFDLGdCQUF5QixPQUFURCxVQUFTO2dCQUV0QyxJQUFJLENBQUNFLE1BQU0sQ0FBQ0Q7Z0JBRVosT0FBTyxJQUFJO1lBQ2I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0osUUFBUTtnQkFDakIsSUFBTUMsTUFBTSxBQUFDLGdCQUF5QixPQUFURCxVQUFTO2dCQUV0QyxJQUFJLENBQUNFLE1BQU0sQ0FBQ0Q7Z0JBRVosT0FBTyxJQUFJO1lBQ2I7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0wsUUFBUTtnQkFDakIsSUFBTUMsTUFBTSxBQUFDLGtCQUEyQixPQUFURCxVQUFTLE1BQ2xDTSxRQUFRO2dCQUVkLElBQUksQ0FBQ0osTUFBTSxDQUFDRDtnQkFFWixJQUFJLENBQUNNLFFBQVEsQ0FBQ0Q7Z0JBRWQsT0FBTyxJQUFJO1lBQ2I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUEsY0FBYztnQkFFcEIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxHQUFHO2dCQUNmLElBQU1DLFNBQVMsQUFBQyxJQUE4QixPQUExQmYscUJBQXFCYyxNQUFLO2dCQUU5QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNELE1BQU07Z0JBQ2xCLElBQU1ELE1BQU1aLHFCQUFxQmE7Z0JBRWpDLE9BQU9EO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsS0FBSyxFQUFFQyxVQUFVO2dCQUNyQyxJQUFJQSxlQUFlQyxXQUFXO29CQUM1QkQsYUFBYUQsT0FBTyxHQUFHO29CQUV2QkEsUUExRGVuQjtnQkEyRGpCO2dCQUVBLElBQU1NLE1BQU0sTUFDTkssUUFBUSxPQUNSVyxhQUFhLEVBQUUsRUFDZkMsYUFBYSxNQUNiQyxjQUFjLE1BQ2RDLGNBQWMsTUFDZEMsY0FBYyxNQUNkQyxlQUFlLE1BQ2ZDLGVBQWUsTUFDZkMsaUJBQWlCLE1BQ2pCQyxZQUFZLElBQUlYLE1BQU1DLFlBQVlkLEtBQUtLLE9BQU9XLFlBQVlDLFlBQVlDLGFBQWFDLGFBQWFDLGFBQWFDLGNBQWNDLGNBQWNDO2dCQUUvSSxPQUFPQztZQUNUOzs7V0ExRW1COUI7RUFBa0IrQixzQkFBYSJ9