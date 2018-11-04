import IEventListener from './IEventListener';
import GameController from './GameController';
import { Direction } from '../model/Direction';

export default class KeyListener implements IEventListener {
  private ctrl: GameController;

  constructor(ctrl: GameController) {
    this.ctrl = ctrl;
    this.enable();
  }

  enable(): void {
    // attach key listener
    document.addEventListener('keydown', e => this.handleEvt(e));
  }

  disable(): void {
    // remove key listener
    document.removeEventListener('keydown', this.handleEvt);
  }

  handleEvt(e: any) {
    var direction: Direction = this.ctrl.snake.direction;

    if (e) {
      switch (e.which) {
        // left
        case 37:
          e.preventDefault();
          if (direction !== Direction.Left && direction !== Direction.Right) {
            this.ctrl.snake.queueDirection(Direction.Left);
          }
          break;
        // up
        case 38:
          e.preventDefault();
          if (direction !== Direction.Up && direction !== Direction.Down) {
            this.ctrl.snake.queueDirection(Direction.Up);
          }
          break;
        // right
        case 39:
          e.preventDefault();
          if (direction !== Direction.Right && direction !== Direction.Left) {
            this.ctrl.snake.queueDirection(Direction.Right);
          }
          break;
        // down
        case 40:
          e.preventDefault();
          if (direction !== Direction.Down && direction !== Direction.Up) {
            this.ctrl.snake.queueDirection(Direction.Down);
          }
          break;
      }
    }
  }
}
