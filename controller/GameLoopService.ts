/// <reference path="GameController.ts" />
/// <reference path="../model/Snake.ts" />
/// <reference path="../model/Piece.ts" />

module controller {

    export class GameLoopService {

        static collisionSnake(snake:model.Snake):boolean {
            var result:boolean = false;
            var i = 0;
            var len = snake.pieces.length - 1;
            var piece:model.Piece;

            // check all pieces for collision with head piece
            while (i < len && !result) {
                piece = snake.pieces[i];

                if ( (snake.getHead().getPosition().x === piece.getPosition().x) &&
                     (snake.getHead().getPosition().y === piece.getPosition().y) ) {
                    result = true;
                }
                i++;
            }
            return result;
        }

        static collisionFood(snake:model.Snake, food:model.Food) {
            var r1:model.Piece = snake.getHead();
            var r2:model.Food = food;
            var rSize:number = food.getSize() / 2;

            return !(r2.getPosition().x > (r1.getPosition().x + rSize) ||
                (r2.getPosition().x + rSize) < r1.getPosition().x ||
                r2.getPosition().y > (r1.getPosition().y + rSize) ||
                (r2.getPosition().y + rSize) < r1.getPosition().y);
        }


    }

}