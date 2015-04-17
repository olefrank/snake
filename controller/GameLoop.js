/// <reference path="GameController.ts" />
/// <reference path="GameLoopService.ts" />
var controller;
(function (controller) {
    var GameLoop = (function () {
        function GameLoop(ctrl) {
            var _this = this;
            this.gameLoop = function () {
                _this.requestID = requestAnimationFrame(_this.gameLoop);
                _this.now = Date.now();
                _this.delta = _this.now - _this.then;
                if (_this.delta > _this.interval) {
                    _this.then = _this.now - (_this.delta % _this.interval);
                    if (_this.ctrl.snake) {
                        // game over
                        if (controller.GameLoopService.collisionSnake(_this.ctrl.snake)) {
                            alert("Game over!");
                            _this.stop();
                        }
                        else {
                            if (!_this.ctrl.snake.eating && controller.GameLoopService.collisionFood(_this.ctrl.snake, _this.ctrl.food)) {
                                _this.ctrl.snake.eating = true;
                            }
                            // eating
                            if (_this.ctrl.snake.eating) {
                                _this.ctrl.snake.grow();
                                _this.ctrl.gameView.drawSnake();
                                _this.foodEaten++;
                                // reset food & update score
                                if (_this.foodEaten === _this.ctrl.numFoodToEat) {
                                    _this.ctrl.updateScore();
                                    _this.ctrl.snake.eating = false;
                                    _this.foodEaten = 0;
                                    _this.ctrl.createFood();
                                }
                            }
                            else {
                                _this.ctrl.snake.move();
                                _this.ctrl.gameView.drawSnake();
                                _this.ctrl.gameView.drawFood(_this.ctrl.food);
                            }
                        }
                    }
                }
            };
            this.ctrl = ctrl;
            this.foodEaten = 0;
            this.then = Date.now();
            this.fps = 15;
            this.interval = 1000 / this.fps;
        }
        GameLoop.prototype.start = function () {
            if (!this.requestID) {
                this.gameLoop();
            }
        };
        GameLoop.prototype.stop = function () {
            if (this.requestID) {
                cancelAnimationFrame(this.requestID);
                this.requestID = undefined;
            }
        };
        return GameLoop;
    })();
    controller.GameLoop = GameLoop;
})(controller || (controller = {}));
//# sourceMappingURL=GameLoop.js.map