/// <reference path="GameController.ts" />
/// <reference path="GameLoopService.ts" />

module controller {

    export class GameLoop {

        ctrl:controller.GameController;
        foodEaten:number;
        requestID:number;
        fps:number;
        now:number;
        then:number;
        interval:number;
        delta:number;

        constructor(ctrl:controller.GameController) {
            this.ctrl = ctrl;
            this.foodEaten = 0;

            this.then = Date.now();
            this.fps = 15;
            this.interval = 1000/this.fps;
        }

        start():void {
            if (!this.requestID) {
                this.gameLoop();
            }
        }

        stop():void {
            if (this.requestID) {
                cancelAnimationFrame(this.requestID);
                this.requestID = undefined;
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
                    if ( controller.GameLoopService.collisionSnake(this.ctrl.snake) ) {
                        alert("Game over!");
                        this.stop();
                    }
                    else {
                        if ( !this.ctrl.snake.eating && controller.GameLoopService.collisionFood(this.ctrl.snake, this.ctrl.food) ) {
                            this.ctrl.snake.eating = true;
                        }

                        // eating
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
                        }
                        else {
                            this.ctrl.snake.move();
                            this.ctrl.gameView.drawSnake();
                            this.ctrl.gameView.drawFood(this.ctrl.food);
                        }
                    }
                }
            }
        }
    }
}