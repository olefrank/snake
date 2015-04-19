/// <reference path="../model/Direction.ts" />
/// <reference path="../model/Snake.ts" />
/// <reference path="IEventListener.ts" />
var controller;
(function (controller) {
    var KeyListener = (function () {
        function KeyListener(ctrl) {
            this.ctrl = ctrl;
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
            var direction = this.ctrl.snake.direction;
            if (e) {
                switch (e.which) {
                    case 37:
                        e.preventDefault();
                        if (direction !== 3 /* Left */ && direction !== 1 /* Right */) {
                            this.ctrl.snake.queueDirection(3 /* Left */);
                            ;
                        }
                        break;
                    case 38:
                        e.preventDefault();
                        if (direction !== 0 /* Up */ && direction !== 2 /* Down */) {
                            this.ctrl.snake.queueDirection(0 /* Up */);
                            ;
                        }
                        break;
                    case 39:
                        e.preventDefault();
                        if (direction !== 1 /* Right */ && direction !== 3 /* Left */) {
                            this.ctrl.snake.queueDirection(1 /* Right */);
                            ;
                        }
                        break;
                    case 40:
                        e.preventDefault();
                        if (direction !== 2 /* Down */ && direction !== 0 /* Up */) {
                            this.ctrl.snake.queueDirection(2 /* Down */);
                            ;
                        }
                        break;
                }
            }
        };
        return KeyListener;
    })();
    controller.KeyListener = KeyListener;
})(controller || (controller = {}));
//# sourceMappingURL=KeyListener.js.map