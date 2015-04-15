/// <reference path="../model/Snake.ts" />
/// <reference path="GameController.ts" />

module controller {

    export class GameControllerService {

        static createSnake(ctrl:GameController):model.Snake {
            // random direction but can not be left
            var direction:model.Direction = model.Direction.Left;
            while (direction === model.Direction.Left) {
                direction = this.getRandomInt(0,3);
            }

            // start position
            var x:number = this.getRandomDiv(0, ctrl.canvasWidth / 2, ctrl.dotSize);
            var y:number = this.getRandomDiv(0, ctrl.canvasWidth - 50, ctrl.dotSize);
            var position:model.IPosObject = {x: x, y: y};

            var numPieces:number = 10;

            var piece:model.Piece;
            var pPos:model.IPosObject;
            var xInc:number;
            var pieces:Array<model.Piece> = [];

            // create pieces
            for (var i = 0; i < numPieces; i++) {
                xInc = i * ctrl.dotSize;
                pPos = {x: position.x + xInc, y:position.y};

                piece = new model.Piece(pPos, ctrl.dotSize);
                pieces.push(piece);
            }
            return new model.Snake(pieces, direction, ctrl);
        }

        static createFood(ctrl:GameController):model.Food {
            var x:number = this.getRandomDiv(0, ctrl.canvasWidth - ctrl.dotSize, ctrl.dotSize);
            var y:number = this.getRandomDiv(0, ctrl.canvasHeight - ctrl.dotSize, ctrl.dotSize);
            var color:string = this.getRandomColor();
            var food:model.Food = new model.Food({x: x, y: y}, ctrl.dotSize, color);

            return food;
        }

        /**
         * Create random coordinate for food
         * @param min: canvas min width/height
         * @param max: canvas max width/height
         * @returns {number}
         */
        private static getRandomDiv(min, max, div) {
            return this.getRandomInt(min / div, max / div) * div;
        }

        /**
         * Helper for createRandomDiv
         */
        private static getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        /**
         * Create random hex color string
         * @returns {string}
         */
        private static getRandomColor():string {
            var letters:Array<string> = '0123456789ABCDEF'.split('');
            var color:string = '#';
            for (var i:number = 0; i < 6; i++) {
                color += letters[ Math.round(Math.random() * 15) ];
            }
            return color;
        }

    }

}