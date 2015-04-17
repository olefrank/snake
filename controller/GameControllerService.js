/// <reference path="../model/Snake.ts" />
/// <reference path="GameController.ts" />
var controller;
(function (controller) {
    var GameControllerService = (function () {
        function GameControllerService() {
        }
        GameControllerService.createSnake = function (ctrl) {
            // random direction but can not be left
            var direction = 2 /* Left */;
            while (direction === 2 /* Left */) {
                direction = this.getRandomInt(0, 3);
            }
            // start position
            var x = this.getRandomDiv(0, ctrl.canvasWidth / 2, ctrl.dotSize);
            var y = this.getRandomDiv(0, ctrl.canvasWidth - 50, ctrl.dotSize);
            var position = { x: x, y: y };
            var numPieces = 10;
            var piece;
            var pPos;
            var xInc;
            var pieces = [];
            for (var i = 0; i < numPieces; i++) {
                xInc = i * ctrl.dotSize;
                pPos = { x: position.x + xInc, y: position.y };
                piece = new model.Piece(pPos, ctrl.dotSize, ctrl.defaultColor);
                pieces.push(piece);
            }
            return new model.Snake(pieces, direction, ctrl);
        };
        GameControllerService.createFood = function (ctrl) {
            var x = this.getRandomDiv(0, ctrl.canvasWidth - ctrl.foodSize, ctrl.foodSize);
            var y = this.getRandomDiv(0, ctrl.canvasWidth - ctrl.foodSize, ctrl.foodSize);
            var color = this.getRandomColor();
            var food = new model.Food({ x: x, y: y }, ctrl.foodSize, color);
            return food;
        };
        /**
         * Create random coordinate for food
         * @param min: canvas min width/height
         * @param max: canvas max width/height
         * @returns {number}
         */
        GameControllerService.getRandomDiv = function (min, max, div) {
            return this.getRandomInt(min / div, max / div) * div;
        };
        /**
         * Helper for createRandomDiv
         */
        GameControllerService.getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        /**
         * Create random hex color string
         * @returns {string}
         */
        GameControllerService.getRandomColor = function () {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.round(Math.random() * 15)];
            }
            return color;
        };
        return GameControllerService;
    })();
    controller.GameControllerService = GameControllerService;
})(controller || (controller = {}));
//# sourceMappingURL=GameControllerService.js.map