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
const _mysql = require("mysql");
const _murmuration = require("murmuration");
let pool = null;
class Connection {
    constructor(conn, log){
        this.conn = conn;
        this.log = log;
    }
    getLog() {
        return this.log;
    }
    query(sql, parameters, callback) {
        this.conn.query(sql, parameters, (error, rows)=>{
            if (error) {
                diagnoseError(error, sql, this.log);
            }
            callback(error, rows);
        });
    }
    release() {
        this.conn.release();
    }
    begin(callback) {
        this.conn.beginTransaction(callback);
    }
    commit(callback) {
        this.conn.commit(callback);
    }
    rollback(callback) {
        this.conn.rollback(callback);
    }
    static fromConfiguration(configuration, callback) {
        if (pool === null) {
            pool = (0, _mysql.createPool)(configuration);
        }
        pool.getConnection((error, conn)=>{
            let connection = null;
            const { log = _murmuration.defaultLog } = configuration;
            if (error) {
                const sql = null; ///
                diagnoseError(error, sql, log);
            } else {
                error = null;
                connection = new Connection(conn, log);
            }
            callback(error, connection);
        });
    }
}
function diagnoseError(error, sql, log) {
    const { code } = error;
    log.error(`Error code '${code}'...`);
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
                const { message } = error;
                log.error(message);
                if (sql) {
                    log.error(`The offending SQL is: '${sql}'`);
                }
            }
            break;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVQb29sIH0gZnJvbSBcIm15c3FsXCI7XG5cbmltcG9ydCB7IGRlZmF1bHRMb2cgfSBmcm9tIFwibXVybXVyYXRpb25cIjtcblxubGV0IHBvb2wgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoY29ubiwgbG9nKSB7XG4gICAgdGhpcy5jb25uID0gY29ubjtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxuICBxdWVyeShzcWwsIHBhcmFtZXRlcnMsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jb25uLnF1ZXJ5KHNxbCwgcGFyYW1ldGVycywgKGVycm9yLCByb3dzKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZGlhZ25vc2VFcnJvcihlcnJvciwgc3FsLCB0aGlzLmxvZyk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCByb3dzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbGVhc2UoKSB7XG4gICAgdGhpcy5jb25uLnJlbGVhc2UoKTtcbiAgfVxuXG4gIGJlZ2luKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jb25uLmJlZ2luVHJhbnNhY3Rpb24oY2FsbGJhY2spO1xuICB9XG5cbiAgY29tbWl0KGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jb25uLmNvbW1pdChjYWxsYmFjayk7XG4gIH1cblxuICByb2xsYmFjayhjYWxsYmFjaykge1xuICAgIHRoaXMuY29ubi5yb2xsYmFjayhjYWxsYmFjayk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBpZiAocG9vbCA9PT0gbnVsbCkge1xuICAgICAgcG9vbCA9IGNyZWF0ZVBvb2woY29uZmlndXJhdGlvbik7XG4gICAgfVxuXG4gICAgcG9vbC5nZXRDb25uZWN0aW9uKChlcnJvciwgY29ubikgPT4geyAvLy9cbiAgICAgIGxldCBjb25uZWN0aW9uID0gbnVsbDtcblxuICAgICAgY29uc3QgeyBsb2cgPSBkZWZhdWx0TG9nIH0gPSBjb25maWd1cmF0aW9uO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc3Qgc3FsID0gbnVsbDsgLy8vXG5cbiAgICAgICAgZGlhZ25vc2VFcnJvcihlcnJvciwgc3FsLCBsb2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IgPSBudWxsO1xuXG4gICAgICAgIGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihjb25uLCBsb2cpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhlcnJvciwgY29ubmVjdGlvbik7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlhZ25vc2VFcnJvcihlcnJvciwgc3FsLCBsb2cpIHtcbiAgY29uc3QgeyBjb2RlIH0gPSBlcnJvcjtcblxuICBsb2cuZXJyb3IoYEVycm9yIGNvZGUgJyR7Y29kZX0nLi4uYCk7XG5cbiAgc3dpdGNoKGNvZGUpIHtcbiAgICBjYXNlIFwiRUNPTk5SRUZVU0VEXCI6XG4gICAgICBsb2cuZXJyb3IoXCJUaGUgZGF0YWJhc2UgaXNuJ3QgcnVubmluZywgcHJvYmFibHkuXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiRU5PVEZPVU5EXCI6XG4gICAgICBsb2cuZXJyb3IoXCJUaGUgaG9zdCBpcyB3cm9uZywgcHJvYmFibHkuXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiRVJfQkFEX0RCX0VSUk9SXCI6XG4gICAgICBsb2cuZXJyb3IoXCJUaGUgZGF0YWJhc2UgbmFtZSBpcyB3cm9uZywgcHJvYmFibHkuXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiRVJfQUNDRVNTX0RFTklFRF9FUlJPUlwiOlxuICAgICAgbG9nLmVycm9yKFwiVGhlIHVzZXJuYW1lIG9yIHRoZSBwYXNzd29yZCBhcmUgd3JvbmcsIHByb2JhYmx5LlwiKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIkVUSU1FT1VUXCI6XG4gICAgY2FzZSBcIlBST1RPQ09MX1NFUVVFTkNFX1RJTUVPVVRcIjpcbiAgICAgIGxvZy5lcnJvcihcIlRoZSBkYXRhYmFzZSBzZXJ2ZXIgaXMgZG93biwgcHJvYmFibHkuXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gZXJyb3I7XG5cbiAgICAgICAgbG9nLmVycm9yKG1lc3NhZ2UpO1xuXG4gICAgICAgIGlmIChzcWwpIHtcbiAgICAgICAgICBsb2cuZXJyb3IoYFRoZSBvZmZlbmRpbmcgU1FMIGlzOiAnJHtzcWx9J2ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbm5lY3Rpb24iLCJwb29sIiwiY29ubiIsImxvZyIsImdldExvZyIsInF1ZXJ5Iiwic3FsIiwicGFyYW1ldGVycyIsImNhbGxiYWNrIiwiZXJyb3IiLCJyb3dzIiwiZGlhZ25vc2VFcnJvciIsInJlbGVhc2UiLCJiZWdpbiIsImJlZ2luVHJhbnNhY3Rpb24iLCJjb21taXQiLCJyb2xsYmFjayIsImZyb21Db25maWd1cmF0aW9uIiwiY29uZmlndXJhdGlvbiIsImNyZWF0ZVBvb2wiLCJnZXRDb25uZWN0aW9uIiwiY29ubmVjdGlvbiIsImRlZmF1bHRMb2ciLCJjb2RlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7Ozt1QkFOTTs2QkFFQTtBQUUzQixJQUFJQyxPQUFPO0FBRUksTUFBTUQ7SUFDbkIsWUFBWUUsSUFBSSxFQUFFQyxHQUFHLENBQUU7UUFDckIsSUFBSSxDQUFDRCxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxHQUFHLEdBQUdBO0lBQ2I7SUFFQUMsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDRCxHQUFHO0lBQ2pCO0lBRUFFLE1BQU1DLEdBQUcsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUU7UUFDL0IsSUFBSSxDQUFDTixJQUFJLENBQUNHLEtBQUssQ0FBQ0MsS0FBS0MsWUFBWSxDQUFDRSxPQUFPQztZQUN2QyxJQUFJRCxPQUFPO2dCQUNURSxjQUFjRixPQUFPSCxLQUFLLElBQUksQ0FBQ0gsR0FBRztZQUNwQztZQUVBSyxTQUFTQyxPQUFPQztRQUNsQjtJQUNGO0lBRUFFLFVBQVU7UUFDUixJQUFJLENBQUNWLElBQUksQ0FBQ1UsT0FBTztJQUNuQjtJQUVBQyxNQUFNTCxRQUFRLEVBQUU7UUFDZCxJQUFJLENBQUNOLElBQUksQ0FBQ1ksZ0JBQWdCLENBQUNOO0lBQzdCO0lBRUFPLE9BQU9QLFFBQVEsRUFBRTtRQUNmLElBQUksQ0FBQ04sSUFBSSxDQUFDYSxNQUFNLENBQUNQO0lBQ25CO0lBRUFRLFNBQVNSLFFBQVEsRUFBRTtRQUNqQixJQUFJLENBQUNOLElBQUksQ0FBQ2MsUUFBUSxDQUFDUjtJQUNyQjtJQUVBLE9BQU9TLGtCQUFrQkMsYUFBYSxFQUFFVixRQUFRLEVBQUU7UUFDaEQsSUFBSVAsU0FBUyxNQUFNO1lBQ2pCQSxPQUFPa0IsSUFBQUEsaUJBQVUsRUFBQ0Q7UUFDcEI7UUFFQWpCLEtBQUttQixhQUFhLENBQUMsQ0FBQ1gsT0FBT1A7WUFDekIsSUFBSW1CLGFBQWE7WUFFakIsTUFBTSxFQUFFbEIsTUFBTW1CLHVCQUFVLEVBQUUsR0FBR0o7WUFFN0IsSUFBSVQsT0FBTztnQkFDVCxNQUFNSCxNQUFNLE1BQU0sR0FBRztnQkFFckJLLGNBQWNGLE9BQU9ILEtBQUtIO1lBQzVCLE9BQU87Z0JBQ0xNLFFBQVE7Z0JBRVJZLGFBQWEsSUFBSXJCLFdBQVdFLE1BQU1DO1lBQ3BDO1lBRUFLLFNBQVNDLE9BQU9ZO1FBQ2xCO0lBQ0Y7QUFDRjtBQUVBLFNBQVNWLGNBQWNGLEtBQUssRUFBRUgsR0FBRyxFQUFFSCxHQUFHO0lBQ3BDLE1BQU0sRUFBRW9CLElBQUksRUFBRSxHQUFHZDtJQUVqQk4sSUFBSU0sS0FBSyxDQUFDLENBQUMsWUFBWSxFQUFFYyxLQUFLLElBQUksQ0FBQztJQUVuQyxPQUFPQTtRQUNMLEtBQUs7WUFDSHBCLElBQUlNLEtBQUssQ0FBQztZQUNWO1FBRUYsS0FBSztZQUNITixJQUFJTSxLQUFLLENBQUM7WUFDVjtRQUVGLEtBQUs7WUFDSE4sSUFBSU0sS0FBSyxDQUFDO1lBQ1Y7UUFFRixLQUFLO1lBQ0hOLElBQUlNLEtBQUssQ0FBQztZQUNWO1FBRUYsS0FBSztRQUNMLEtBQUs7WUFDSE4sSUFBSU0sS0FBSyxDQUFDO1lBQ1Y7UUFFRjtZQUFTO2dCQUNMLE1BQU0sRUFBRWUsT0FBTyxFQUFFLEdBQUdmO2dCQUVwQk4sSUFBSU0sS0FBSyxDQUFDZTtnQkFFVixJQUFJbEIsS0FBSztvQkFDUEgsSUFBSU0sS0FBSyxDQUFDLENBQUMsdUJBQXVCLEVBQUVILElBQUksQ0FBQyxDQUFDO2dCQUM1QztZQUNGO1lBQ0E7SUFDSjtBQUNGIn0=