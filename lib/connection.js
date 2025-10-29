"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get createPool () {
        return _mysql.createPool;
    },
    get default () {
        return Connection;
    },
    get defaultLog () {
        return _murmuration.defaultLog;
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
                    pool = createPool(configuration);
                }
                pool.getConnection(function(error, conn) {
                    var connection = null;
                    var _configuration_log = configuration.log, log = _configuration_log === void 0 ? defaultLog : _configuration_log;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBjcmVhdGVQb29sIH0gZnJvbSBcIm15c3FsXCI7XG5leHBvcnQgeyBkZWZhdWx0TG9nIH0gZnJvbSBcIm11cm11cmF0aW9uXCI7XG5cbmxldCBwb29sID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbm4sIGxvZykge1xuICAgIHRoaXMuY29ubiA9IGNvbm47XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gIH1cblxuICBnZXRMb2coKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbiAgcXVlcnkoc3FsLCBwYXJhbWV0ZXJzLCBjYWxsYmFjaykge1xuICAgIHRoaXMuY29ubi5xdWVyeShzcWwsIHBhcmFtZXRlcnMsIChlcnJvciwgcm93cykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGRpYWdub3NlRXJyb3IoZXJyb3IsIHNxbCwgdGhpcy5sb2cpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhlcnJvciwgcm93cyk7XG4gICAgfSk7XG4gIH1cblxuICByZWxlYXNlKCkge1xuICAgIHRoaXMuY29ubi5yZWxlYXNlKCk7XG4gIH1cblxuICBiZWdpbihjYWxsYmFjaykge1xuICAgIHRoaXMuY29ubi5iZWdpblRyYW5zYWN0aW9uKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbW1pdChjYWxsYmFjaykge1xuICAgIHRoaXMuY29ubi5jb21taXQoY2FsbGJhY2spO1xuICB9XG5cbiAgcm9sbGJhY2soY2FsbGJhY2spIHtcbiAgICB0aGlzLmNvbm4ucm9sbGJhY2soY2FsbGJhY2spO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25maWd1cmF0aW9uKGNvbmZpZ3VyYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgaWYgKHBvb2wgPT09IG51bGwpIHtcbiAgICAgIHBvb2wgPSBjcmVhdGVQb29sKGNvbmZpZ3VyYXRpb24pO1xuICAgIH1cblxuICAgIHBvb2wuZ2V0Q29ubmVjdGlvbigoZXJyb3IsIGNvbm4pID0+IHsgLy8vXG4gICAgICBsZXQgY29ubmVjdGlvbiA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHsgbG9nID0gZGVmYXVsdExvZyB9ID0gY29uZmlndXJhdGlvbjtcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNvbnN0IHNxbCA9IG51bGw7IC8vL1xuXG4gICAgICAgIGRpYWdub3NlRXJyb3IoZXJyb3IsIHNxbCwgbG9nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yID0gbnVsbDtcblxuICAgICAgICBjb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24oY29ubiwgbG9nKTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soZXJyb3IsIGNvbm5lY3Rpb24pO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpYWdub3NlRXJyb3IoZXJyb3IsIHNxbCwgbG9nKSB7XG4gIGNvbnN0IHsgY29kZSB9ID0gZXJyb3I7XG5cbiAgbG9nLmVycm9yKGBFcnJvciBjb2RlICcke2NvZGV9Jy4uLmApO1xuXG4gIHN3aXRjaChjb2RlKSB7XG4gICAgY2FzZSBcIkVDT05OUkVGVVNFRFwiOlxuICAgICAgbG9nLmVycm9yKFwiVGhlIGRhdGFiYXNlIGlzbid0IHJ1bm5pbmcsIHByb2JhYmx5LlwiKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIkVOT1RGT1VORFwiOlxuICAgICAgbG9nLmVycm9yKFwiVGhlIGhvc3QgaXMgd3JvbmcsIHByb2JhYmx5LlwiKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIkVSX0JBRF9EQl9FUlJPUlwiOlxuICAgICAgbG9nLmVycm9yKFwiVGhlIGRhdGFiYXNlIG5hbWUgaXMgd3JvbmcsIHByb2JhYmx5LlwiKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIkVSX0FDQ0VTU19ERU5JRURfRVJST1JcIjpcbiAgICAgIGxvZy5lcnJvcihcIlRoZSB1c2VybmFtZSBvciB0aGUgcGFzc3dvcmQgYXJlIHdyb25nLCBwcm9iYWJseS5cIik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJFVElNRU9VVFwiOlxuICAgIGNhc2UgXCJQUk9UT0NPTF9TRVFVRU5DRV9USU1FT1VUXCI6XG4gICAgICBsb2cuZXJyb3IoXCJUaGUgZGF0YWJhc2Ugc2VydmVyIGlzIGRvd24sIHByb2JhYmx5LlwiKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDoge1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGVycm9yO1xuXG4gICAgICAgIGxvZy5lcnJvcihtZXNzYWdlKTtcblxuICAgICAgICBpZiAoc3FsKSB7XG4gICAgICAgICAgbG9nLmVycm9yKGBUaGUgb2ZmZW5kaW5nIFNRTCBpczogJyR7c3FsfSdgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVQb29sIiwiQ29ubmVjdGlvbiIsImRlZmF1bHRMb2ciLCJwb29sIiwiY29ubiIsImxvZyIsImdldExvZyIsInF1ZXJ5Iiwic3FsIiwicGFyYW1ldGVycyIsImNhbGxiYWNrIiwiZXJyb3IiLCJyb3dzIiwiZGlhZ25vc2VFcnJvciIsInJlbGVhc2UiLCJiZWdpbiIsImJlZ2luVHJhbnNhY3Rpb24iLCJjb21taXQiLCJyb2xsYmFjayIsImZyb21Db25maWd1cmF0aW9uIiwiY29uZmlndXJhdGlvbiIsImdldENvbm5lY3Rpb24iLCJjb25uZWN0aW9uIiwiY29kZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQUVTQTtlQUFBQSxpQkFBVTs7O2VBS0VDOztRQUpaQztlQUFBQSx1QkFBVTs7O3FCQURROzJCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFJQyxPQUFPO0FBRUksSUFBQSxBQUFNRiwyQkFBTjthQUFNQSxXQUNQRyxJQUFJLEVBQUVDLEdBQUc7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