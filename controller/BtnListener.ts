/// <reference path="../model/Direction.ts" />
/// <reference path="../model/Snake.ts" />
/// <reference path="IEventListener.ts" />

module controller {

    export class BtnListener implements IEventListener {

        ctrl:GameController;
        buttons:NodeListOf<HTMLButtonElement>;

        constructor(ctrl:GameController) {
            this.ctrl = ctrl;
            this.buttons = document.getElementsByTagName("button");
            this.enable();
        }

        enable():void {
            for (var i = 0; i < this.buttons.length; i++) {
                this.buttons[i].addEventListener("click", (e) => this.handleEvt(e));
            }
        }

        disable():void {
            for (var i = 0; i < this.buttons.length; i++) {
                this.buttons[i].removeEventListener("click", this.handleEvt);
            }
        }

        handleEvt(e) {
            if (e) {
                switch (e.target.id) {
                    case "btn_play":
                        this.ctrl.startGame();
                        break;

                    case "btn_stop":
                        this.ctrl.stopGame();
                        break;
                }
            }
        }

    }

}