/// <reference path="../view/GameView.ts" />
/// <reference path="../model/Snake.ts" />
/// <reference path="../model/Food.ts" />
/// <reference path="GameLoop.ts" />
/// <reference path="KeyListener.ts" />
/// <reference path="BtnListener.ts" />
/// <reference path="GameControllerService.ts" />

module controller {

    export class GameController {

        private _canvasWidth:number;
        private _canvasHeight:number;
        private _gameView:view.GameView;
        private _snake:model.Snake;
        private _food:model.Food;
        private _gameLoop:controller.GameLoop;
        private _loopSpeed:number;
        private _numFoodToEat:number;
        private _keyListener:controller.IEventListener;
        private _btnListener:controller.IEventListener;
        private _dotSize:number;
        private _foodSize:number;
        private _score:number;

        get snake():model.Snake { return this._snake; }

        get food():model.Food {return this._food; }

        get numFoodToEat():number { return this._numFoodToEat; }

        get gameView():view.GameView { return this._gameView; }

        get dotSize():number { return this._dotSize; }

        get foodSize():number { return this._foodSize; }

        get canvasWidth():number { return this._canvasWidth; }

        get canvasHeight():number { return this._canvasHeight; }

        get score():number { return this._score; }

        get btnListener():controller.IEventListener { return this._btnListener; }





        constructor() {
            this.init();
            this.create();
        }

        init():void {
            this._canvasWidth = 400;
            this._canvasHeight = 400;
            this._loopSpeed = 80;
            this._numFoodToEat = 5;
            this._dotSize = 8;
            this._foodSize = this._dotSize * 2;
            this._score = 0;
            this.createSnake();
            this.createFood();
        }

        create():void {
            this._keyListener = new KeyListener(this);
            this._btnListener = new BtnListener(this);
            this._gameView = new view.GameView(this);
            this._gameLoop = new controller.GameLoop(this);
        }

        startGame():void {
            this._gameLoop.start();
        }

        stopGame():void {
            this._gameLoop.stop();
        }

        createSnake():void {
            this._snake = controller.GameControllerService.createSnake(this);
        }

        createFood():void {
            this._food = controller.GameControllerService.createFood(this);
        }

        updateScore():void {
            this._score += 100;
            this.gameView.updateScore();
        }

        gameover():void {
            this.gameView.showRetryBtn(true);
        }

        restartGame():void {
            this.gameView.showRetryBtn(false);
            this.init();
            this.gameView.updateScore();
            this._gameLoop.start();
        }

    }

}