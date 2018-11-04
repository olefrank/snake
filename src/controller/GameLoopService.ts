import Snake from "../model/Snake";
import Dot from "../model/Dot";

export default class GameLoopService {
  /**
   * Check if head collides with every other piece
   * @param snake contains all pieces
   * @returns {boolean} true if collision
   */
  static collisionSnake(snake: Snake): boolean {
    var result: boolean = false;
    var i = 0;
    var len = snake.pieces.length - 1;
    var piece: Dot;

    // check all pieces for collision with head piece
    while (i < len && !result) {
      piece = snake.pieces[i];

      if (
        snake.getHead().getPosition().x === piece.getPosition().x &&
        snake.getHead().getPosition().y === piece.getPosition().y
      ) {
        result = true;
      }
      i++;
    }
    return result;
  }

  /**
   * Check if head rect collides with food rect
   * @param snake
   * @param food
   * @returns {boolean} true if collision
   */
  static collisionFood(snake: Snake, food: Dot) {
    var head: Dot = snake.getHead();

    return !(
      food.getPosition().x > head.getPosition().x + head.getSize() - 1 ||
      food.getPosition().x + food.getSize() - 1 < head.getPosition().x ||
      food.getPosition().y > head.getPosition().y + head.getSize() - 1 ||
      food.getPosition().y + food.getSize() - 1 < head.getPosition().y
    );
  }
}
