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
var selectMaximumVersionMigrationSQL = "\n\n    SELECT MAX(`version`) AS `maximum_version` FROM `migration`;\n\n";
var _default = selectMaximumVersionMigrationSQL;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcWwvbWlncmF0aW9uL3NlbGVjdE1heGltdW1WZXJzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBzZWxlY3RNYXhpbXVtVmVyc2lvbk1pZ3JhdGlvblNRTCA9IGBcblxuICAgIFNFTEVDVCBNQVgoXFxgdmVyc2lvblxcYCkgQVMgXFxgbWF4aW11bV92ZXJzaW9uXFxgIEZST00gXFxgbWlncmF0aW9uXFxgO1xuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3RNYXhpbXVtVmVyc2lvbk1pZ3JhdGlvblNRTDtcbiJdLCJuYW1lcyI6WyJzZWxlY3RNYXhpbXVtVmVyc2lvbk1pZ3JhdGlvblNRTCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7QUFOQSxJQUFNQSxtQ0FBbUM7SUFNekMsV0FBZUEifQ==