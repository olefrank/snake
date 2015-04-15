/// <reference path="GameController.ts" />
/// <reference path="GameLoopService.ts" />
var controller;
(function (controller) {
    var GameLoop = (function () {
        function GameLoop(ctrl) {
            this.ctrl = ctrl;
            this.foodEaten = 0;
        }
        GameLoop.prototype.start = function () {
            var _this = this;
            if (!this.loop) {
                this.loop = setInterval(function () { return _this.gameLoop(); }, this.ctrl.loopSpeed);
            }
        };
        GameLoop.prototype.stop = function () {
            if (this.loop) {
                clearInterval(this.loop);
                this.loop = undefined;
            }
        };
        GameLoop.prototype.gameLoop = function () {
            if (this.ctrl.snake) {
                // game over
                if (controller.GameLoopService.collisionSnake(this.ctrl.snake)) {
                    alert("Game over!");
                    this.stop();
                }
                else {
                    if (controller.GameLoopService.collisionFood(this.ctrl.snake, this.ctrl.food)) {
                        this.ctrl.updateScore();
                        this.ctrl.gameView.updateScore();
                        this.ctrl.snake.eating = true;
                    }
                    // eating
                    if (this.ctrl.snake.eating) {
                        this.ctrl.snake.grow();
                        this.ctrl.gameView.drawSnake();
                        this.foodEaten++;
                    }
                    else {
                        this.ctrl.snake.move();
                        this.ctrl.gameView.drawSnake();
                        this.ctrl.gameView.drawFood(this.ctrl.food);
                    }
                    // reset food
                    if (this.foodEaten === this.ctrl.numFoodToEat) {
                        this.ctrl.snake.eating = false;
                        this.foodEaten = 0;
                        this.ctrl.createFood();
                    }
                }
            }
        };
        return GameLoop;
    })();
    controller.GameLoop = GameLoop;
})(controller || (controller = {}));
//# sourceMappingURL=GameLoop.js.map