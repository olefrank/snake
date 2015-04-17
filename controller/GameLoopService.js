/// <reference path="GameController.ts" />
/// <reference path="../model/Snake.ts" />
/// <reference path="../model/Piece.ts" />
var controller;
(function (controller) {
    var GameLoopService = (function () {
        function GameLoopService() {
        }
        GameLoopService.collisionSnake = function (snake) {
            var result = false;
            var i = 0;
            var len = snake.pieces.length - 1;
            var piece;
            while (i < len && !result) {
                piece = snake.pieces[i];
                if ((snake.getHead().getPosition().x === piece.getPosition().x) && (snake.getHead().getPosition().y === piece.getPosition().y)) {
                    result = true;
                }
                i++;
            }
            return result;
        };
        GameLoopService.collisionFood = function (snake, food) {
            var head = snake.getHead();
            return !(food.getPosition().x > (head.getPosition().x + head.getSize() - 1) || (food.getPosition().x + food.getSize() - 1) < head.getPosition().x || food.getPosition().y > (head.getPosition().y + head.getSize() - 1) || (food.getPosition().y + food.getSize() - 1) < head.getPosition().y);
        };
        return GameLoopService;
    })();
    controller.GameLoopService = GameLoopService;
})(controller || (controller = {}));
//# sourceMappingURL=GameLoopService.js.map