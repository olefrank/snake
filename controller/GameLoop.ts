/// <reference path="GameController.ts" />
/// <reference path="GameLoopService.ts" />

module controller {

    export class GameLoop {

        ctrl:controller.GameController;
        loop:any;
        foodEaten:number;

        constructor(ctrl:controller.GameController) {
            this.ctrl = ctrl;
            this.foodEaten = 0;
        }

        start():void {
            if (!this.loop) {
                this.loop = setInterval( () => this.gameLoop(), this.ctrl.loopSpeed );
            }
        }

        stop():void {
            if (this.loop) {
                clearInterval(this.loop);
                this.loop = undefined;
            }
        }

        gameLoop():void {

            if (this.ctrl.snake) {

                // game over
                if ( controller.GameLoopService.collisionSnake(this.ctrl.snake) ) {
                    alert("Game over!");
                    this.stop();
                }
                else {
                    if ( controller.GameLoopService.collisionFood(this.ctrl.snake, this.ctrl.food) ) {
                        this.ctrl.updateScore();
                        this.ctrl.gameView.updateScore();
                        this.ctrl.snake.eating = true;
                    }

                    // eating
                    if (this.ctrl.snake.eating) {
                        this.ctrl.snake.grow();
                        this.ctrl.gameView.drawSnake();
                        this.foodEaten++;
                    }
                    else {
                        this.ctrl.snake.move();
                        this.ctrl.gameView.drawSnake();
                        this.ctrl.gameView.drawFood(this.ctrl.food);
                    }

                    // reset food
                    if (this.foodEaten === this.ctrl.numFoodToEat) {
                        this.ctrl.snake.eating = false;
                        this.foodEaten = 0;
                        this.ctrl.createFood();
                    }
                }

            }
        }

    }

}