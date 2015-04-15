/// <reference path="../model/Snake.ts" />
/// <reference path="../model/Direction.ts" />
/// <reference path="../model/Piece.ts" />
/// <reference path="../controller/GameController.ts" />
/// <reference path="../model/IPosObject.ts" />
/// <reference path="../controller/KeyListener.ts" />

module view {

    export class GameView {

        private canvas:HTMLCanvasElement;
        private ctx:CanvasRenderingContext2D;
        private ctrl:controller.GameController;
        private scoreFld:HTMLElement;

        constructor(ctrl:controller.GameController) {
            this.ctrl = ctrl;
            this.canvas = document.getElementsByTagName("canvas")[0];
            this.canvas.width = ctrl.canvasWidth;
            this.canvas.height = ctrl.canvasHeight;
            this.ctx = this.canvas.getContext("2d");
            this.scoreFld = document.getElementById("fld_score");
        }

        drawDot(dot:model.Dot):void {
            this.ctx.fillRect(dot.getPosition().x, dot.getPosition().y, dot.getSize(), dot.getSize());
        }

        drawFood(food:model.Food):void {
            // use custom color for food
            this.ctx.fillStyle = food.color;
            this.drawDot(food);

            // switch back to default color
            this.ctx.fillStyle = "black";
        }

        drawSnake():void {
            // get snake length
            var piece:model.Piece;
            var i:number = 0;
            var numPieces:number = this.ctrl.snake.pieces.length;

            // clear canvas
            this.ctx.clearRect(0, 0, this.ctrl.canvasWidth, this.ctrl.canvasHeight);

            // draw parts
            while (i < numPieces) {
                piece = this.ctrl.snake.pieces[i];
                this.drawDot(piece);
                i++;
            }
        }

        updateScore():void {
            this.scoreFld.innerText = this.ctrl.score.toString();
        }
    }

}