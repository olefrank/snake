/// <reference path="Direction.ts" />
/// <reference path="IPosObject.ts" />
/// <reference path="Dot.ts" />
var model;
(function (model) {
    var Food = (function () {
        function Food(position, size, color) {
            this.position = position;
            this.size = size;
            this._color = color;
        }
        Food.prototype.getPosition = function () {
            return this.position;
        };
        Food.prototype.getSize = function () {
            return this.size;
        };
        Object.defineProperty(Food.prototype, "color", {
            get: function () {
                return this._color;
            },
            enumerable: true,
            configurable: true
        });
        return Food;
    })();
    model.Food = Food;
})(model || (model = {}));
//# sourceMappingURL=Food.js.map