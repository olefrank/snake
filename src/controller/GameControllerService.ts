import GameController from './GameController';
import Snake from '../model/Snake';
import { Direction } from '../model/Direction';
import IPosObject from '../model/IPosObject';
import Dot from '../model/Dot';

export default class GameControllerService {
  static createSnake(ctrl: GameController): Snake {
    // random direction but can not be left
    var direction: Direction = Direction.Left;
    while (direction === Direction.Left) {
      direction = this.getRandomInt(0, 3);
    }

    // start position
    var x: number = this.getRandomDiv(0, ctrl.canvasWidth / 2, ctrl.dotSize);
    var y: number = this.getRandomDiv(0, ctrl.canvasWidth - 50, ctrl.dotSize);
    var position: IPosObject = { x: x, y: y };

    var numPieces: number = 10;

    var piece: Dot;
    var pPos: IPosObject;
    var xInc: number;
    var pieces: Array<Dot> = [];

    // create pieces
    for (var i = 0; i < numPieces; i++) {
      xInc = i * ctrl.dotSize;
      pPos = { x: position.x + xInc, y: position.y };

      piece = new Dot(pPos, ctrl.dotSize, ctrl.defaultColor);
      pieces.push(piece);
    }
    return new Snake(pieces, direction, ctrl);
  }

  static createFood(ctrl: GameController): Dot {
    var x: number = this.getRandomDiv(
      0,
      ctrl.canvasWidth - ctrl.foodSize,
      ctrl.foodSize
    );
    var y: number = this.getRandomDiv(
      0,
      ctrl.canvasWidth - ctrl.foodSize,
      ctrl.foodSize
    );
    var color: string = this.getRandomColor();
    var food: Dot = new Dot({ x: x, y: y }, ctrl.foodSize, color);

    return food;
  }

  static createPiece(
    head: Dot,
    canvasWidth: number,
    canvasHeight: number,
    direction: Direction,
    dotSize: number
  ): Dot {
    var coord = Object.create(head.getPosition());

    switch (direction) {
      case Direction.Up:
        coord.y -= dotSize;
        coord.y = this.limitCoord(coord.y, canvasHeight);
        break;
      case Direction.Down:
        coord.y += dotSize;
        coord.y = this.limitCoord(coord.y, canvasHeight);
        break;
      case Direction.Left:
        coord.x -= dotSize;
        coord.x = this.limitCoord(coord.x, canvasWidth);
        break;
      case Direction.Right:
        coord.x += dotSize;
        coord.x = this.limitCoord(coord.x, canvasWidth);
        break;
    }

    return new Dot(coord, dotSize, head.getColor());
  }

  /**
   * Limit coordinate to be inside given boundary
   * @param coord x or y coord
   * @param length boundary
   * @returns {number}
   */
  private static limitCoord(coord: number, length: number): number {
    return ((coord % length) + length) % length;
  }

  /**
   * Create random coordinate for food
   * @param min: canvas min width/height
   * @param max: canvas max width/height
   * @returns {number}
   */
  private static getRandomDiv(min: number, max: number, div: number) {
    return this.getRandomInt(min / div, max / div) * div;
  }

  /**
   * Helper for createRandomDiv
   */
  private static getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /**
   * Create random hex color string
   * @returns {string}
   */
  private static getRandomColor(): string {
    var letters: Array<string> = '0123456789ABCDEF'.split('');
    var color: string = '#';
    for (var i: number = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }
}
