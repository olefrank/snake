/// <reference path="../model/Direction.ts" />
/// <reference path="../model/Snake.ts" />
/// <reference path="IEventListener.ts" />

module controller {

    export class KeyListener implements IEventListener {

        private lastMoved:number;
        private ctrl:GameController;

        constructor(ctrl:GameController) {
            this.ctrl = ctrl;
            this.lastMoved = 0;
            this.enable();
        }

        enable():void {
            // attach key listener
            document.addEventListener("keydown", (e) => this.handleEvt(e));
        }

        disable():void {
            // remove key listener
            document.removeEventListener("keydown", this.handleEvt);
        }

        handleEvt(e) {
            var direction:model.Direction = this.ctrl.snake.direction;

            if (e) {
                switch (e.which) {
                    // left
                    case 37:
                        e.preventDefault();
                        if (direction !== model.Direction.Left && direction !== model.Direction.Right) {
                            direction = model.Direction.Left;
                        }
                        break;
                    // up
                    case 38:
                        e.preventDefault();
                        if (direction !== model.Direction.Up && direction !== model.Direction.Down) {
                            direction = model.Direction.Up;
                        }
                        break;
                    // right
                    case 39:
                        e.preventDefault();
                        if (direction !== model.Direction.Right && direction !== model.Direction.Left) {
                            direction = model.Direction.Right;
                        }
                        break;
                    // down
                    case 40:
                        e.preventDefault();
                        if (direction !== model.Direction.Down && direction !== model.Direction.Up) {
                            direction = model.Direction.Down;
                        }
                        break;
                }

                this.ctrl.snake.queueDirection(direction);
            }
        }

    }

}