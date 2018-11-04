import GameView from '../view/GameView';
import GameLoop from './GameLoop';
import Snake from '../model/Snake';
import Dot from '../model/Dot';
import IEventListener from './IEventListener';
import KeyListener from './KeyListener';
import BtnListener from './BtnListener';
import GameControllerService from './GameControllerService';

export default class GameController {
  private _canvasWidth: number;
  private _canvasHeight: number;
  private _gameView: GameView;
  private _snake: Snake;
  private _food: Dot;
  private _gameLoop: GameLoop;
  private _loopSpeed: number;
  private _numFoodToEat: number;
  private _keyListener: IEventListener;
  private _btnListener: IEventListener;
  private _dotSize: number;
  private _foodSize: number;
  private _score: number;
  private _defaultColor: string;

  get snake(): Snake {
    return this._snake;
  }

  get food(): Dot {
    return this._food;
  }

  get numFoodToEat(): number {
    return this._numFoodToEat;
  }

  get gameView(): GameView {
    return this._gameView;
  }

  get dotSize(): number {
    return this._dotSize;
  }

  get foodSize(): number {
    return this._foodSize;
  }

  get canvasWidth(): number {
    return this._canvasWidth;
  }

  get canvasHeight(): number {
    return this._canvasHeight;
  }

  get score(): number {
    return this._score;
  }

  get defaultColor(): string {
    return this._defaultColor;
  }

  constructor() {
    this._canvasWidth = 400;
    this._canvasHeight = 400;
    this._loopSpeed = 80;
    this._numFoodToEat = 5;
    this._dotSize = 8;
    this._foodSize = this._dotSize * 2;
    this._score = 0;
    this._defaultColor = 'black';
    this._snake = GameControllerService.createSnake(this);
    this._food = GameControllerService.createFood(this);
    this._keyListener = new KeyListener(this);
    this._btnListener = new BtnListener(this);
    this._gameView = new GameView(this);
    this._gameLoop = new GameLoop(this);
  }

  init(): void {
    this._canvasWidth = 400;
    this._canvasHeight = 400;
    this._loopSpeed = 80;
    this._numFoodToEat = 5;
    this._dotSize = 8;
    this._foodSize = this._dotSize * 2;
    this._score = 0;
    this._defaultColor = 'black';
    this.createSnake();
    this.createFood();
  }

  create(): void {
    this._keyListener = new KeyListener(this);
    this._btnListener = new BtnListener(this);
    this._gameView = new GameView(this);
    this._gameLoop = new GameLoop(this);
  }

  startGame(): void {
    this._gameLoop.start();
  }

  stopGame(): void {
    this._gameLoop.stop();
  }

  createSnake(): void {
    this._snake = GameControllerService.createSnake(this);
  }

  createFood(): void {
    this._food = GameControllerService.createFood(this);
  }

  createDot(): Dot {
    return GameControllerService.createPiece(
      this.snake.getHead(),
      this.canvasWidth,
      this.canvasHeight,
      this.snake.getNextDirection(),
      this.dotSize
    );
  }

  updateScore(): void {
    this._score += 100;
    this.gameView.updateScore();
  }

  gameover(): void {
    this.gameView.showRetryBtn(true);
  }

  restartGame(): void {
    this.gameView.showRetryBtn(false);
    this.init();
    this.gameView.updateScore();
    this._gameLoop.start();
  }
}
