/// <reference path="Piece.ts" />
/// <reference path="Direction.ts" />
/// <reference path="IPosObject.ts" />
/// <reference path="Food.ts" />
/// <reference path="../controller/GameController.ts" />
var model;
(function (model) {
    var Snake = (function () {
        function Snake(pieces, direction, ctrl) {
            this._pieces = pieces;
            this._direction = direction;
            this._eating = false;
            this.ctrl = ctrl;
        }
        Object.defineProperty(Snake.prototype, "pieces", {
            get: function () {
                return this._pieces;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Snake.prototype, "direction", {
            get: function () {
                return this._direction;
            },
            set: function (direction) {
                this._direction = direction;
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
        Snake.prototype.getHead = function () {
            return this._pieces[this._pieces.length - 1];
        };
        Snake.prototype.move = function () {
            // create new head
            this.grow();
            // remove old tail
            this._pieces.splice(0, 1);
        };
        Snake.prototype.grow = function () {
            this._pieces.push(this.createNewPiece());
        };
        Snake.prototype.createNewPiece = function () {
            var coord = Object.create(this.getHead().getPosition());
            switch (this._direction) {
                case 0 /* Up */:
                    coord.y -= this.ctrl.dotSize;
                    coord.y = this.limitCoord(coord.y, this.ctrl.canvasHeight);
                    break;
                case 1 /* Down */:
                    coord.y += this.ctrl.dotSize;
                    coord.y = this.limitCoord(coord.y, this.ctrl.canvasHeight);
                    break;
                case 2 /* Left */:
                    coord.x -= this.ctrl.dotSize;
                    coord.x = this.limitCoord(coord.x, this.ctrl.canvasWidth);
                    break;
                case 3 /* Right */:
                    coord.x += this.ctrl.dotSize;
                    coord.x = this.limitCoord(coord.x, this.ctrl.canvasWidth);
                    break;
            }
            return new model.Piece(coord, this.ctrl.dotSize);
        };
        Snake.prototype.limitCoord = function (coord, length) {
            return (coord % length + length) % length;
        };
        return Snake;
    })();
    model.Snake = Snake;
})(model || (model = {}));
//# sourceMappingURL=Snake.js.map