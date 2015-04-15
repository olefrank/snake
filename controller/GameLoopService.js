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
            var r1 = snake.getHead();
            var r2 = food;
            var rSize = food.getSize() / 2;
            return !(r2.getPosition().x > (r1.getPosition().x + rSize) || (r2.getPosition().x + rSize) < r1.getPosition().x || r2.getPosition().y > (r1.getPosition().y + rSize) || (r2.getPosition().y + rSize) < r1.getPosition().y);
        };
        return GameLoopService;
    })();
    controller.GameLoopService = GameLoopService;
})(controller || (controller = {}));
//# sourceMappingURL=GameLoopService.js.map