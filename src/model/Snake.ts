import Dot from './Dot';
import { Direction } from './Direction';
import GameController from '../controller/GameController';

export default class Snake {
  private _pieces: Array<Dot>;
  private _direction: Direction;
  private _eating: boolean;
  private ctrl: GameController;
  private _directionQ: Array<Direction>;

  constructor(pieces: Array<Dot>, direction: Direction, ctrl: GameController) {
    this._pieces = pieces;
    this._eating = false;
    this.ctrl = ctrl;

    this._direction = Direction.Left;
    this._directionQ = [];
    this._directionQ.push(direction);
  }

  get pieces(): Array<Dot> {
    return this._pieces;
  }

  get eating(): boolean {
    return this._eating;
  }
  set eating(val: boolean) {
    this._eating = val;
  }

  get direction(): Direction {
    return this._direction;
  }

  queueDirection(direction: Direction): void {
    console.log('direction to queue: ' + direction);
    this._directionQ.push(direction);
  }

  getNextDirection(): Direction {
    if (this._directionQ.length > 0) {
      this._direction = this._directionQ.shift()!;
    }
    return this._direction;
  }

  getHead(): Dot {
    return this._pieces[this._pieces.length - 1];
  }

  move(): void {
    this.grow();
    this._pieces.shift();
  }

  grow(): void {
    this._pieces.push(this.ctrl.createDot());
  }
}
