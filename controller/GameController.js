/// <reference path="../view/GameView.ts" />
/// <reference path="../model/Snake.ts" />
/// <reference path="../model/Food.ts" />
/// <reference path="GameLoop.ts" />
/// <reference path="KeyListener.ts" />
/// <reference path="BtnListener.ts" />
/// <reference path="GameControllerService.ts" />
var controller;
(function (controller) {
    var GameController = (function () {
        function GameController() {
            this.init();
            this.create();
        }
        Object.defineProperty(GameController.prototype, "snake", {
            get: function () {
                return this._snake;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameController.prototype, "food", {
            get: function () {
                return this._food;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameController.prototype, "loopSpeed", {
            get: function () {
                return this._loopSpeed;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameController.prototype, "numFoodToEat", {
            get: function () {
                return this._numFoodToEat;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameController.prototype, "gameView", {
            get: function () {
                return this._gameView;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameController.prototype, "dotSize", {
            get: function () {
                return this._dotSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameController.prototype, "canvasWidth", {
            get: function () {
                return this._canvasWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameController.prototype, "canvasHeight", {
            get: function () {
                return this._canvasHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameController.prototype, "score", {
            get: function () {
                return this._score;
            },
            enumerable: true,
            configurable: true
        });
        GameController.prototype.init = function () {
            this._canvasWidth = 400;
            this._canvasHeight = 400;
            this._loopSpeed = 80;
            this._numFoodToEat = 5;
            this._dotSize = 8;
            this._score = 0;
        };
        GameController.prototype.create = function () {
            this.createSnake();
            this.createFood();
            this._keyListener = new controller.KeyListener(this._snake, this.loopSpeed);
            this._btnListener = new controller.BtnListener(this);
            this._gameView = new view.GameView(this);
            this._gameLoop = new controller.GameLoop(this);
        };
        GameController.prototype.startGame = function () {
            this._gameLoop.start();
        };
        GameController.prototype.stopGame = function () {
            this._gameLoop.stop();
        };
        GameController.prototype.createSnake = function () {
            this._snake = controller.GameControllerService.createSnake(this);
        };
        GameController.prototype.createFood = function () {
            this._food = controller.GameControllerService.createFood(this);
        };
        GameController.prototype.updateScore = function () {
            this._score += 100;
        };
        return GameController;
    })();
    controller.GameController = GameController;
})(controller || (controller = {}));
//# sourceMappingURL=GameController.js.map