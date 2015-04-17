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
            var head:model.Piece = snake.getHead();

            return !(food.getPosition().x > (head.getPosition().x + head.getSize()-1) ||
                (food.getPosition().x + food.getSize()-1) < head.getPosition().x ||
                food.getPosition().y > (head.getPosition().y + head.getSize()-1) ||
                (food.getPosition().y + food.getSize()-1) < head.getPosition().y);
        }

    }

}