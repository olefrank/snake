/// <reference path="../model/Direction.ts" />
/// <reference path="../model/Snake.ts" />
/// <reference path="IEventListener.ts" />

module controller {

    export class KeyListener implements IEventListener {

        private snake:model.Snake;
        private loopSpeed:number;
        private lastMoved:number;
        private ctrl:GameController;

        constructor(snake:model.Snake, loopSpeed:number) {
            this.snake = snake;
            this.loopSpeed = loopSpeed;
            this.lastMoved = 0;
            this.enable();
        }

        enable():void {
            // attach key listener+
            document.onkeydown = function (e) { return false; };
            document.addEventListener("keydown", (e) => this.handleEvt(e));
        }

        disable():void {
            // attach key listener+
            document.onkeydown = function (e) { return true; };
            document.removeEventListener("keydown", this.handleEvt);
        }

        handleEvt(e) {
            var direction:model.Direction = this.snake.direction;

            if (e) {
                switch (e.which) {
                    case 37:
                        if (direction !== model.Direction.Left && direction !== model.Direction.Right) {
                            direction = model.Direction.Left;
                        }
                        break;
                    case 38:
                        if (direction !== model.Direction.Up && direction !== model.Direction.Down) {
                            direction = model.Direction.Up;
                        }
                        break;
                    case 39:
                        if (direction !== model.Direction.Right && direction !== model.Direction.Left) {
                            direction = model.Direction.Right;
                        }
                        break;
                    case 40:
                        if (direction !== model.Direction.Down && direction !== model.Direction.Up) {
                            direction = model.Direction.Down;
                        }
                        break;
                    case 116:
                        console.log("refresh");
                        window.location.reload();
                        break;
                }

                // limit time to change direction (wait for last change to be rendered)
                if ( (this.lastMoved + this.loopSpeed) < Date.now() ) {
                    this.snake.direction = direction;
                    this.lastMoved = Date.now();
                }
            }
        }

    }

}