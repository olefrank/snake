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
            // attach key listener+
            document.onkeydown = function (e) {
                return false;
            };
            document.addEventListener("keydown", function (e) { return _this.handleEvt(e); });
        };
        KeyListener.prototype.disable = function () {
            // attach key listener+
            document.onkeydown = function (e) {
                return true;
            };
            document.removeEventListener("keydown", this.handleEvt);
        };
        KeyListener.prototype.handleEvt = function (e) {
            var direction = this.snake.direction;
            if (e) {
                switch (e.which) {
                    case 37:
                        if (direction !== 2 /* Left */ && direction !== 3 /* Right */) {
                            direction = 2 /* Left */;
                        }
                        break;
                    case 38:
                        if (direction !== 0 /* Up */ && direction !== 1 /* Down */) {
                            direction = 0 /* Up */;
                        }
                        break;
                    case 39:
                        if (direction !== 3 /* Right */ && direction !== 2 /* Left */) {
                            direction = 3 /* Right */;
                        }
                        break;
                    case 40:
                        if (direction !== 1 /* Down */ && direction !== 0 /* Up */) {
                            direction = 1 /* Down */;
                        }
                        break;
                    case 116:
                        console.log("refresh");
                        window.location.reload();
                        break;
                }
                // limit time to change direction (wait for last change to be rendered)
                if ((this.lastMoved + this.loopSpeed) < Date.now()) {
                    this.snake.direction = direction;
                    this.lastMoved = Date.now();
                }
            }
        };
        return KeyListener;
    })();
    controller.KeyListener = KeyListener;
})(controller || (controller = {}));
//# sourceMappingURL=KeyListener.js.map