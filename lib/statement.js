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
const _murmuration = require("murmuration");
const { camelCaseToSnakeCase, snakeCaseToCamelCase } = _murmuration.caseUtilities;
class Statement extends _murmuration.Statement {
    update(relation) {
        const sql = `UPDATE \`${relation}\``;
        this.setSQL(sql);
        return this;
    }
    insertInto(relation) {
        const sql = `INSERT INTO \`${relation}\``;
        this.setSQL(sql);
        return this;
    }
    deleteFrom(relation) {
        const sql = `DELETE FROM \`${relation}\``;
        this.setSQL(sql);
        return this;
    }
    selectFrom(relation) {
        const sql = `SELECT * FROM \`${relation}\``, query = true;
        this.setSQL(sql);
        this.setQuery(query);
        return this;
    }
    placeholder() {
        const placeholder = "?";
        return placeholder;
    }
    columnFromKey(key) {
        const column = `\`${camelCaseToSnakeCase(key)}\``;
        return column;
    }
    keyFromColumn(column) {
        const key = snakeCaseToCamelCase(column);
        return key;
    }
    static fromConnection(Class, connection) {
        if (connection === undefined) {
            connection = Class; ///
            Class = Statement;
        }
        const sql = null, query = false, parameters = [], oneHandler = null, noneHandler = null, manyHandler = null, elseHandler = null, firstHandler = null, errorHandler = null, successHandler = null, statement = new Class(connection, sql, query, parameters, oneHandler, noneHandler, manyHandler, elseHandler, firstHandler, errorHandler, successHandler);
        return statement;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFN0YXRlbWVudCBhcyBCYXNlU3RhdGVtZW50LCBjYXNlVXRpbGl0aWVzIH0gZnJvbSBcIm11cm11cmF0aW9uXCI7XG5cbmNvbnN0IHsgY2FtZWxDYXNlVG9TbmFrZUNhc2UsIHNuYWtlQ2FzZVRvQ2FtZWxDYXNlIH0gPSBjYXNlVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZW1lbnQgZXh0ZW5kcyBCYXNlU3RhdGVtZW50IHtcbiAgdXBkYXRlKHJlbGF0aW9uKSB7XG4gICAgY29uc3Qgc3FsID0gYFVQREFURSBcXGAke3JlbGF0aW9ufVxcYGA7XG5cbiAgICB0aGlzLnNldFNRTChzcWwpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbnNlcnRJbnRvKHJlbGF0aW9uKSB7XG4gICAgY29uc3Qgc3FsID0gYElOU0VSVCBJTlRPIFxcYCR7cmVsYXRpb259XFxgYDtcblxuICAgIHRoaXMuc2V0U1FMKHNxbCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlbGV0ZUZyb20ocmVsYXRpb24pIHtcbiAgICBjb25zdCBzcWwgPSBgREVMRVRFIEZST00gXFxgJHtyZWxhdGlvbn1cXGBgO1xuXG4gICAgdGhpcy5zZXRTUUwoc3FsKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2VsZWN0RnJvbShyZWxhdGlvbikge1xuICAgIGNvbnN0IHNxbCA9IGBTRUxFQ1QgKiBGUk9NIFxcYCR7cmVsYXRpb259XFxgYCxcbiAgICAgICAgICBxdWVyeSA9IHRydWU7XG5cbiAgICB0aGlzLnNldFNRTChzcWwpO1xuXG4gICAgdGhpcy5zZXRRdWVyeShxdWVyeSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHBsYWNlaG9sZGVyKCkge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gXCI/XCI7XG5cbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gIH1cblxuICBjb2x1bW5Gcm9tS2V5KGtleSkge1xuICAgIGNvbnN0IGNvbHVtbiA9IGBcXGAke2NhbWVsQ2FzZVRvU25ha2VDYXNlKGtleSl9XFxgYDtcblxuICAgIHJldHVybiBjb2x1bW47XG4gIH1cblxuICBrZXlGcm9tQ29sdW1uKGNvbHVtbikge1xuICAgIGNvbnN0IGtleSA9IHNuYWtlQ2FzZVRvQ2FtZWxDYXNlKGNvbHVtbik7XG5cbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25uZWN0aW9uKENsYXNzLCBjb25uZWN0aW9uKSB7XG4gICAgaWYgKGNvbm5lY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29ubmVjdGlvbiA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBTdGF0ZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc3FsID0gbnVsbCxcbiAgICAgICAgICBxdWVyeSA9IGZhbHNlLFxuICAgICAgICAgIHBhcmFtZXRlcnMgPSBbXSxcbiAgICAgICAgICBvbmVIYW5kbGVyID0gbnVsbCxcbiAgICAgICAgICBub25lSGFuZGxlciA9IG51bGwsXG4gICAgICAgICAgbWFueUhhbmRsZXIgPSBudWxsLFxuICAgICAgICAgIGVsc2VIYW5kbGVyID0gbnVsbCxcbiAgICAgICAgICBmaXJzdEhhbmRsZXIgPSBudWxsLFxuICAgICAgICAgIGVycm9ySGFuZGxlciA9IG51bGwsXG4gICAgICAgICAgc3VjY2Vzc0hhbmRsZXIgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBDbGFzcyhjb25uZWN0aW9uLCBzcWwsIHF1ZXJ5LCBwYXJhbWV0ZXJzLCBvbmVIYW5kbGVyLCBub25lSGFuZGxlciwgbWFueUhhbmRsZXIsIGVsc2VIYW5kbGVyLCBmaXJzdEhhbmRsZXIsIGVycm9ySGFuZGxlciwgc3VjY2Vzc0hhbmRsZXIpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN0YXRlbWVudCIsImNhbWVsQ2FzZVRvU25ha2VDYXNlIiwic25ha2VDYXNlVG9DYW1lbENhc2UiLCJjYXNlVXRpbGl0aWVzIiwiQmFzZVN0YXRlbWVudCIsInVwZGF0ZSIsInJlbGF0aW9uIiwic3FsIiwic2V0U1FMIiwiaW5zZXJ0SW50byIsImRlbGV0ZUZyb20iLCJzZWxlY3RGcm9tIiwicXVlcnkiLCJzZXRRdWVyeSIsInBsYWNlaG9sZGVyIiwiY29sdW1uRnJvbUtleSIsImtleSIsImNvbHVtbiIsImtleUZyb21Db2x1bW4iLCJmcm9tQ29ubmVjdGlvbiIsIkNsYXNzIiwiY29ubmVjdGlvbiIsInVuZGVmaW5lZCIsInBhcmFtZXRlcnMiLCJvbmVIYW5kbGVyIiwibm9uZUhhbmRsZXIiLCJtYW55SGFuZGxlciIsImVsc2VIYW5kbGVyIiwiZmlyc3RIYW5kbGVyIiwiZXJyb3JIYW5kbGVyIiwic3VjY2Vzc0hhbmRsZXIiLCJzdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7NkJBSnFDO0FBRTFELE1BQU0sRUFBRUMsb0JBQW9CLEVBQUVDLG9CQUFvQixFQUFFLEdBQUdDLDBCQUFhO0FBRXJELE1BQU1ILGtCQUFrQkksc0JBQWE7SUFDbERDLE9BQU9DLFFBQVEsRUFBRTtRQUNmLE1BQU1DLE1BQU0sQ0FBQyxTQUFTLEVBQUVELFNBQVMsRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQ0UsTUFBTSxDQUFDRDtRQUVaLE9BQU8sSUFBSTtJQUNiO0lBRUFFLFdBQVdILFFBQVEsRUFBRTtRQUNuQixNQUFNQyxNQUFNLENBQUMsY0FBYyxFQUFFRCxTQUFTLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUNFLE1BQU0sQ0FBQ0Q7UUFFWixPQUFPLElBQUk7SUFDYjtJQUVBRyxXQUFXSixRQUFRLEVBQUU7UUFDbkIsTUFBTUMsTUFBTSxDQUFDLGNBQWMsRUFBRUQsU0FBUyxFQUFFLENBQUM7UUFFekMsSUFBSSxDQUFDRSxNQUFNLENBQUNEO1FBRVosT0FBTyxJQUFJO0lBQ2I7SUFFQUksV0FBV0wsUUFBUSxFQUFFO1FBQ25CLE1BQU1DLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRUQsU0FBUyxFQUFFLENBQUMsRUFDckNNLFFBQVE7UUFFZCxJQUFJLENBQUNKLE1BQU0sQ0FBQ0Q7UUFFWixJQUFJLENBQUNNLFFBQVEsQ0FBQ0Q7UUFFZCxPQUFPLElBQUk7SUFDYjtJQUVBRSxjQUFjO1FBQ1osTUFBTUEsY0FBYztRQUVwQixPQUFPQTtJQUNUO0lBRUFDLGNBQWNDLEdBQUcsRUFBRTtRQUNqQixNQUFNQyxTQUFTLENBQUMsRUFBRSxFQUFFaEIscUJBQXFCZSxLQUFLLEVBQUUsQ0FBQztRQUVqRCxPQUFPQztJQUNUO0lBRUFDLGNBQWNELE1BQU0sRUFBRTtRQUNwQixNQUFNRCxNQUFNZCxxQkFBcUJlO1FBRWpDLE9BQU9EO0lBQ1Q7SUFFQSxPQUFPRyxlQUFlQyxLQUFLLEVBQUVDLFVBQVUsRUFBRTtRQUN2QyxJQUFJQSxlQUFlQyxXQUFXO1lBQzVCRCxhQUFhRCxPQUFPLEdBQUc7WUFFdkJBLFFBQVFwQjtRQUNWO1FBRUEsTUFBTU8sTUFBTSxNQUNOSyxRQUFRLE9BQ1JXLGFBQWEsRUFBRSxFQUNmQyxhQUFhLE1BQ2JDLGNBQWMsTUFDZEMsY0FBYyxNQUNkQyxjQUFjLE1BQ2RDLGVBQWUsTUFDZkMsZUFBZSxNQUNmQyxpQkFBaUIsTUFDakJDLFlBQVksSUFBSVgsTUFBTUMsWUFBWWQsS0FBS0ssT0FBT1csWUFBWUMsWUFBWUMsYUFBYUMsYUFBYUMsYUFBYUMsY0FBY0MsY0FBY0M7UUFFL0ksT0FBT0M7SUFDVDtBQUNGIn0=