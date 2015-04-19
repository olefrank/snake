/// <reference path="Dot.ts" />
/// <reference path="Direction.ts" />
/// <reference path="IPosObject.ts" />
/// <reference path="Dot.ts" />
/// <reference path="../controller/GameController.ts" />
var model;
(function (model) {
    var Snake = (function () {
        function Snake(pieces, direction, ctrl) {
            this._pieces = pieces;
            this._eating = false;
            this.ctrl = ctrl;
            this._directionQ = [];
            this._directionQ.push(direction);
        }
        Object.defineProperty(Snake.prototype, "pieces", {
            get: function () {
                return this._pieces;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Snake.prototype, "eating", {
            get: function () {
                return this._eating;
            },
            set: function (val) {
                this._eating = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Snake.prototype, "direction", {
            get: function () {
                return this._direction;
            },
            enumerable: true,
            configurable: true
        });
        Snake.prototype.queueDirection = function (direction) {
            console.log("direction to queue: " + direction);
            this._directionQ.push(direction);
        };
        Snake.prototype.getNextDirection = function () {
            if (this._directionQ.length > 0) {
                this._direction = this._directionQ.shift();
            }
            return this._direction;
        };
        Snake.prototype.getHead = function () {
            return this._pieces[this._pieces.length - 1];
        };
        Snake.prototype.move = function () {
            this.grow();
            this._pieces.shift();
        };
        Snake.prototype.grow = function () {
            this._pieces.push(this.ctrl.createDot());
        };
        return Snake;
    })();
    model.Snake = Snake;
})(model || (model = {}));
//# sourceMappingURL=Snake.js.map