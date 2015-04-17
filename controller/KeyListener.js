/// <reference path="../model/Direction.ts" />
/// <reference path="../model/Snake.ts" />
/// <reference path="IEventListener.ts" />
var controller;
(function (controller) {
    var KeyListener = (function () {
        function KeyListener(snake, loopSpeed) {
            this.snake = snake;
            this.loopSpeed = loopSpeed;
            this.lastMoved = 0;
            this.enable();
        }
        KeyListener.prototype.enable = function () {
            var _this = this;
            // attach key listener
            document.addEventListener("keydown", function (e) { return _this.handleEvt(e); });
        };
        KeyListener.prototype.disable = function () {
            // remove key listener
            document.removeEventListener("keydown", this.handleEvt);
        };
        KeyListener.prototype.handleEvt = function (e) {
            var direction = this.snake.direction;
            if (e) {
                switch (e.which) {
                    case 37:
                        e.preventDefault();
                        if (direction !== 2 /* Left */ && direction !== 3 /* Right */) {
                            direction = 2 /* Left */;
                        }
                        break;
                    case 38:
                        e.preventDefault();
                        if (direction !== 0 /* Up */ && direction !== 1 /* Down */) {
                            direction = 0 /* Up */;
                        }
                        break;
                    case 39:
                        e.preventDefault();
                        if (direction !== 3 /* Right */ && direction !== 2 /* Left */) {
                            direction = 3 /* Right */;
                        }
                        break;
                    case 40:
                        e.preventDefault();
                        if (direction !== 1 /* Down */ && direction !== 0 /* Up */) {
                            direction = 1 /* Down */;
                        }
                        break;
                }
                this.snake.queueDirection(direction);
            }
        };
        return KeyListener;
    })();
    controller.KeyListener = KeyListener;
})(controller || (controller = {}));
//# sourceMappingURL=KeyListener.js.map