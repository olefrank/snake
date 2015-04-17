/// <reference path="Direction.ts" />
/// <reference path="IPosObject.ts" />
/// <reference path="Dot.ts" />
var model;
(function (model) {
    var Food = (function () {
        function Food(position, size, color) {
            this._position = position;
            this._size = size;
            this._color = color;
        }
        Food.prototype.getPosition = function () {
            return this._position;
        };
        Food.prototype.getSize = function () {
            return this._size;
        };
        Food.prototype.getColor = function () {
            return this._color;
        };
        return Food;
    })();
    model.Food = Food;
})(model || (model = {}));
//# sourceMappingURL=Food.js.map