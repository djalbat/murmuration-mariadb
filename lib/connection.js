"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Connection;
    }
});
var _mysql = require("mysql");
var _murmuration = require("murmuration");
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
var pool = null;
var Connection = /*#__PURE__*/ function() {
    function Connection(conn, log) {
        _class_call_check(this, Connection);
        this.conn = conn;
        this.log = log;
    }
    _create_class(Connection, [
        {
            key: "getLog",
            value: function getLog() {
                return this.log;
            }
        },
        {
            key: "query",
            value: function query(sql, parameters, callback) {
                var _this = this;
                this.conn.query(sql, parameters, function(error, rows) {
                    if (error) {
                        diagnoseError(error, sql, _this.log);
                    }
                    callback(error, rows);
                });
            }
        },
        {
            key: "release",
            value: function release() {
                this.conn.release();
            }
        },
        {
            key: "begin",
            value: function begin(callback) {
                this.conn.beginTransaction(callback);
            }
        },
        {
            key: "commit",
            value: function commit(callback) {
                this.conn.commit(callback);
            }
        },
        {
            key: "rollback",
            value: function rollback(callback) {
                this.conn.rollback(callback);
            }
        }
    ], [
        {
            key: "fromConfiguration",
            value: function fromConfiguration(configuration, callback) {
                if (pool === null) {
                    pool = (0, _mysql.createPool)(configuration);
                }
                pool.getConnection(function(error, conn) {
                    var connection = null;
                    var _configuration_log = configuration.log, log = _configuration_log === void 0 ? _murmuration.defaultLog : _configuration_log;
                    if (error) {
                        var sql = null; ///
                        diagnoseError(error, sql, log);
                    } else {
                        error = null;
                        connection = new Connection(conn, log);
                    }
                    callback(error, connection);
                });
            }
        }
    ]);
    return Connection;
}();
function diagnoseError(error, sql, log) {
    var code = error.code;
    log.error("Error code '".concat(code, "'..."));
    switch(code){
        case "ECONNREFUSED":
            log.error("The database isn't running, probably.");
            break;
        case "ENOTFOUND":
            log.error("The host is wrong, probably.");
            break;
        case "ER_BAD_DB_ERROR":
            log.error("The database name is wrong, probably.");
            break;
        case "ER_ACCESS_DENIED_ERROR":
            log.error("The username or the password are wrong, probably.");
            break;
        case "ETIMEOUT":
        case "PROTOCOL_SEQUENCE_TIMEOUT":
            log.error("The database server is down, probably.");
            break;
        default:
            {
                var message = error.message;
                log.error(message);
                if (sql) {
                    log.error("The offending SQL is: '".concat(sql, "'"));
                }
            }
            break;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVQb29sIH0gZnJvbSBcIm15c3FsXCI7XG5cbmltcG9ydCB7IGRlZmF1bHRMb2cgfSBmcm9tIFwibXVybXVyYXRpb25cIjtcblxubGV0IHBvb2wgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoY29ubiwgbG9nKSB7XG4gICAgdGhpcy5jb25uID0gY29ubjtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxuICBxdWVyeShzcWwsIHBhcmFtZXRlcnMsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jb25uLnF1ZXJ5KHNxbCwgcGFyYW1ldGVycywgKGVycm9yLCByb3dzKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZGlhZ25vc2VFcnJvcihlcnJvciwgc3FsLCB0aGlzLmxvZyk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCByb3dzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbGVhc2UoKSB7XG4gICAgdGhpcy5jb25uLnJlbGVhc2UoKTtcbiAgfVxuXG4gIGJlZ2luKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jb25uLmJlZ2luVHJhbnNhY3Rpb24oY2FsbGJhY2spO1xuICB9XG5cbiAgY29tbWl0KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jb25uLmNvbW1pdChjYWxsYmFjayk7XG4gIH1cblxuICByb2xsYmFjayhjYWxsYmFjaykge1xuICAgIHRoaXMuY29ubi5yb2xsYmFjayhjYWxsYmFjayk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBpZiAocG9vbCA9PT0gbnVsbCkge1xuICAgICAgcG9vbCA9IGNyZWF0ZVBvb2woY29uZmlndXJhdGlvbik7XG4gICAgfVxuXG4gICAgcG9vbC5nZXRDb25uZWN0aW9uKChlcnJvciwgY29ubikgPT4geyAvLy9cbiAgICAgIGxldCBjb25uZWN0aW9uID0gbnVsbDtcblxuICAgICAgY29uc3QgeyBsb2cgPSBkZWZhdWx0TG9nIH0gPSBjb25maWd1cmF0aW9uO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc3Qgc3FsID0gbnVsbDsgLy8vXG5cbiAgICAgICAgZGlhZ25vc2VFcnJvcihlcnJvciwgc3FsLCBsb2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IgPSBudWxsO1xuXG4gICAgICAgIGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihjb25uLCBsb2cpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhlcnJvciwgY29ubmVjdGlvbik7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlhZ25vc2VFcnJvcihlcnJvciwgc3FsLCBsb2cpIHtcbiAgY29uc3QgeyBjb2RlIH0gPSBlcnJvcjtcblxuICBsb2cuZXJyb3IoYEVycm9yIGNvZGUgJyR7Y29kZX0nLi4uYCk7XG5cbiAgc3dpdGNoKGNvZGUpIHtcbiAgICBjYXNlIFwiRUNPTk5SRUZVU0VEXCI6XG4gICAgICBsb2cuZXJyb3IoXCJUaGUgZGF0YWJhc2UgaXNuJ3QgcnVubmluZywgcHJvYmFibHkuXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiRU5PVEZPVU5EXCI6XG4gICAgICBsb2cuZXJyb3IoXCJUaGUgaG9zdCBpcyB3cm9uZywgcHJvYmFibHkuXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiRVJfQkFEX0RCX0VSUk9SXCI6XG4gICAgICBsb2cuZXJyb3IoXCJUaGUgZGF0YWJhc2UgbmFtZSBpcyB3cm9uZywgcHJvYmFibHkuXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiRVJfQUNDRVNTX0RFTklFRF9FUlJPUlwiOlxuICAgICAgbG9nLmVycm9yKFwiVGhlIHVzZXJuYW1lIG9yIHRoZSBwYXNzd29yZCBhcmUgd3JvbmcsIHByb2JhYmx5LlwiKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIkVUSU1FT1VUXCI6XG4gICAgY2FzZSBcIlBST1RPQ09MX1NFUVVFTkNFX1RJTUVPVVRcIjpcbiAgICAgIGxvZy5lcnJvcihcIlRoZSBkYXRhYmFzZSBzZXJ2ZXIgaXMgZG93biwgcHJvYmFibHkuXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gZXJyb3I7XG5cbiAgICAgICAgbG9nLmVycm9yKG1lc3NhZ2UpO1xuXG4gICAgICAgIGlmIChzcWwpIHtcbiAgICAgICAgICBsb2cuZXJyb3IoYFRoZSBvZmZlbmRpbmcgU1FMIGlzOiAnJHtzcWx9J2ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbm5lY3Rpb24iLCJwb29sIiwiY29ubiIsImxvZyIsImdldExvZyIsInF1ZXJ5Iiwic3FsIiwicGFyYW1ldGVycyIsImNhbGxiYWNrIiwiZXJyb3IiLCJyb3dzIiwiZGlhZ25vc2VFcnJvciIsInJlbGVhc2UiLCJiZWdpbiIsImJlZ2luVHJhbnNhY3Rpb24iLCJjb21taXQiLCJyb2xsYmFjayIsImZyb21Db25maWd1cmF0aW9uIiwiY29uZmlndXJhdGlvbiIsImNyZWF0ZVBvb2wiLCJnZXRDb25uZWN0aW9uIiwiY29ubmVjdGlvbiIsImRlZmF1bHRMb2ciLCJjb2RlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7cUJBTk07MkJBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQUlDLE9BQU87QUFFSSxJQUFBLEFBQU1ELDJCQUFOO2FBQU1BLFdBQ1BFLElBQUksRUFBRUMsR0FBRztnQ0FERkg7UUFFakIsSUFBSSxDQUFDRSxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxHQUFHLEdBQUdBOztrQkFITUg7O1lBTW5CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEdBQUc7WUFDakI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsR0FBRyxFQUFFQyxVQUFVLEVBQUVDLFFBQVE7O2dCQUM3QixJQUFJLENBQUNOLElBQUksQ0FBQ0csS0FBSyxDQUFDQyxLQUFLQyxZQUFZLFNBQUNFLE9BQU9DO29CQUN2QyxJQUFJRCxPQUFPO3dCQUNURSxjQUFjRixPQUFPSCxLQUFLLE1BQUtILEdBQUc7b0JBQ3BDO29CQUVBSyxTQUFTQyxPQUFPQztnQkFDbEI7WUFDRjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNWLElBQUksQ0FBQ1UsT0FBTztZQUNuQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNTCxRQUFRO2dCQUNaLElBQUksQ0FBQ04sSUFBSSxDQUFDWSxnQkFBZ0IsQ0FBQ047WUFDN0I7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT1AsUUFBUTtnQkFDYixJQUFJLENBQUNOLElBQUksQ0FBQ2EsTUFBTSxDQUFDUDtZQUNuQjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTUixRQUFRO2dCQUNmLElBQUksQ0FBQ04sSUFBSSxDQUFDYyxRQUFRLENBQUNSO1lBQ3JCOzs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFVixRQUFRO2dCQUM5QyxJQUFJUCxTQUFTLE1BQU07b0JBQ2pCQSxPQUFPa0IsSUFBQUEsaUJBQVUsRUFBQ0Q7Z0JBQ3BCO2dCQUVBakIsS0FBS21CLGFBQWEsQ0FBQyxTQUFDWCxPQUFPUDtvQkFDekIsSUFBSW1CLGFBQWE7b0JBRWpCLHlCQUE2QkgsY0FBckJmLEtBQUFBLHNDQUFNbUIsdUJBQVU7b0JBRXhCLElBQUliLE9BQU87d0JBQ1QsSUFBTUgsTUFBTSxNQUFNLEdBQUc7d0JBRXJCSyxjQUFjRixPQUFPSCxLQUFLSDtvQkFDNUIsT0FBTzt3QkFDTE0sUUFBUTt3QkFFUlksYUFBYSxJQXJEQXJCLFdBcURlRSxNQUFNQztvQkFDcEM7b0JBRUFLLFNBQVNDLE9BQU9ZO2dCQUNsQjtZQUNGOzs7V0ExRG1CckI7O0FBNkRyQixTQUFTVyxjQUFjRixLQUFLLEVBQUVILEdBQUcsRUFBRUgsR0FBRztJQUNwQyxJQUFNLEFBQUVvQixPQUFTZCxNQUFUYztJQUVScEIsSUFBSU0sS0FBSyxDQUFDLEFBQUMsZUFBbUIsT0FBTGMsTUFBSztJQUU5QixPQUFPQTtRQUNMLEtBQUs7WUFDSHBCLElBQUlNLEtBQUssQ0FBQztZQUNWO1FBRUYsS0FBSztZQUNITixJQUFJTSxLQUFLLENBQUM7WUFDVjtRQUVGLEtBQUs7WUFDSE4sSUFBSU0sS0FBSyxDQUFDO1lBQ1Y7UUFFRixLQUFLO1lBQ0hOLElBQUlNLEtBQUssQ0FBQztZQUNWO1FBRUYsS0FBSztRQUNMLEtBQUs7WUFDSE4sSUFBSU0sS0FBSyxDQUFDO1lBQ1Y7UUFFRjtZQUFTO2dCQUNMLElBQU0sQUFBRWUsVUFBWWYsTUFBWmU7Z0JBRVJyQixJQUFJTSxLQUFLLENBQUNlO2dCQUVWLElBQUlsQixLQUFLO29CQUNQSCxJQUFJTSxLQUFLLENBQUMsQUFBQywwQkFBNkIsT0FBSkgsS0FBSTtnQkFDMUM7WUFDRjtZQUNBO0lBQ0o7QUFDRiJ9