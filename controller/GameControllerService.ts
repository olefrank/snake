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

            var piece:model.Dot;
            var pPos:model.IPosObject;
            var xInc:number;
            var pieces:Array<model.Dot> = [];

            // create pieces
            for (var i = 0; i < numPieces; i++) {
                xInc = i * ctrl.dotSize;
                pPos = {x: position.x + xInc, y:position.y};

                piece = new model.Dot(pPos, ctrl.dotSize, ctrl.defaultColor);
                pieces.push(piece);
            }
            return new model.Snake(pieces, direction, ctrl);
        }

        static createFood(ctrl:GameController):model.Dot {
            var x:number = this.getRandomDiv(0, ctrl.canvasWidth - ctrl.foodSize, ctrl.foodSize);
            var y:number = this.getRandomDiv(0, ctrl.canvasWidth - ctrl.foodSize, ctrl.foodSize);
            var color:string = this.getRandomColor();
            var food:model.Dot = new model.Dot({x: x, y: y}, ctrl.foodSize, color);

            return food;
        }

        static createPiece(head:model.Dot, canvasWidth:number, canvasHeight:number, direction:model.Direction, dotSize:number):model.Dot {
            var coord = Object.create(head.getPosition());

            switch(direction) {
                case model.Direction.Up:
                    coord.y -= dotSize;
                    coord.y = this.limitCoord(coord.y, canvasHeight);
                    break;
                case model.Direction.Down:
                    coord.y += dotSize;
                    coord.y = this.limitCoord(coord.y, canvasHeight);
                    break;
                case model.Direction.Left:
                    coord.x -= dotSize;
                    coord.x = this.limitCoord(coord.x, canvasWidth);
                    break;
                case model.Direction.Right:
                    coord.x += dotSize;
                    coord.x = this.limitCoord(coord.x, canvasWidth);
                    break;
            }

            return new model.Dot(coord, dotSize, head.getColor());
        }

        /**
         * Limit coordinate to be inside given boundary
         * @param coord x or y coord
         * @param length boundary
         * @returns {number}
         */
        private static limitCoord(coord:number, length:number):number {
            return ( coord % length + length) % length;
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