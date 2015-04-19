/// <reference path="Direction.ts" />
/// <reference path="IPosObject.ts" />
var model;
(function (model) {
    var Dot = (function () {
        function Dot(position, size, color) {
            this.position = position;
            this.size = size;
            this.color = color;
        }
        Dot.prototype.getPosition = function () {
            return this.position;
        };
        Dot.prototype.getSize = function () {
            return this.size;
        };
        Dot.prototype.getColor = function () {
            return this.color;
        };
        Dot.prototype.setColor = function (color) {
            this.color = color;
        };
        return Dot;
    })();
    model.Dot = Dot;
})(model || (model = {}));
//# sourceMappingURL=Dot.js.map