/// <reference path="../model/Snake.ts" />
/// <reference path="../model/Direction.ts" />
/// <reference path="../model/Piece.ts" />
/// <reference path="../controller/GameController.ts" />
/// <reference path="../model/IPosObject.ts" />
/// <reference path="../controller/KeyListener.ts" />
var view;
(function (view) {
    var GameView = (function () {
        function GameView(ctrl) {
            this.ctrl = ctrl;
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.canvas.width = ctrl.canvasWidth;
            this.canvas.height = ctrl.canvasHeight;
            this.ctx = this.canvas.getContext("2d");
            this.scoreFld = document.getElementById("fld_score");
        }
        GameView.prototype.drawDot = function (dot) {
            this.ctx.fillRect(dot.getPosition().x, dot.getPosition().y, dot.getSize(), dot.getSize());
        };
        GameView.prototype.drawFood = function (food) {
            // use custom color for food
            this.ctx.fillStyle = food.color;
            this.drawDot(food);
            // switch back to default color
            this.ctx.fillStyle = "black";
        };
        GameView.prototype.drawSnake = function () {
            // get snake length
            var piece;
            var i = 0;
            var numPieces = this.ctrl.snake.pieces.length;
            // clear canvas
            this.ctx.clearRect(0, 0, this.ctrl.canvasWidth, this.ctrl.canvasHeight);
            while (i < numPieces) {
                piece = this.ctrl.snake.pieces[i];
                this.drawDot(piece);
                i++;
            }
        };
        GameView.prototype.updateScore = function () {
            this.scoreFld.innerText = this.ctrl.score.toString();
        };
        return GameView;
    })();
    view.GameView = GameView;
})(view || (view = {}));
//# sourceMappingURL=GameView.js.map