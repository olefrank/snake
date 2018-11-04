import GameController from './GameController';
import GameLoopService from './GameLoopService';

export default class GameLoop {
  ctrl: GameController;
  foodEaten: number;
  requestID: number;
  fps: number;
  now: number;
  then: number;
  interval: number;
  delta: number;

  constructor(ctrl: GameController) {
    this.ctrl = ctrl;
    this.foodEaten = 0;

    this.requestID = -1;
    this.now = 0;
    this.delta = 0;

    this.then = Date.now();
    this.fps = 15;
    this.interval = 1000 / this.fps;
  }

  start(): void {
    if (this.requestID === -1) {
      this.gameLoop();
    }
  }

  stop(): void {
    if (this.requestID) {
      cancelAnimationFrame(this.requestID);
      this.requestID = -1;
    }
  }

  gameLoop = () => {
    this.requestID = requestAnimationFrame(this.gameLoop);

    this.now = Date.now();
    this.delta = this.now - this.then;

    if (this.delta > this.interval) {
      this.then = this.now - (this.delta % this.interval);

      if (this.ctrl.snake) {
        // game over
        if (GameLoopService.collisionSnake(this.ctrl.snake)) {
          this.ctrl.gameover();
          this.stop();
        } else {
          if (
            !this.ctrl.snake.eating &&
            GameLoopService.collisionFood(this.ctrl.snake, this.ctrl.food)
          ) {
            this.ctrl.snake.eating = true;
            this.ctrl.snake.getHead().setColor(this.ctrl.food.getColor());
          }
          if (this.ctrl.snake.eating) {
            this.ctrl.snake.grow();
            this.ctrl.gameView.drawSnake();
            this.foodEaten++;

            // reset food & update score
            if (this.foodEaten === this.ctrl.numFoodToEat) {
              this.ctrl.updateScore();
              this.ctrl.snake.eating = false;
              this.foodEaten = 0;
              this.ctrl.createFood();
            }
          } else {
            this.ctrl.snake.move();
            this.ctrl.gameView.drawSnake();
            this.ctrl.gameView.drawFood(this.ctrl.food);
          }
        }
      }
    }
  };
}
