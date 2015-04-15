/// <reference path="../model/Direction.ts" />
/// <reference path="../model/Snake.ts" />
/// <reference path="IEventListener.ts" />
var controller;
(function (controller) {
    var BtnListener = (function () {
        function BtnListener(ctrl) {
            this.ctrl = ctrl;
            this.buttons = document.getElementsByTagName("button");
            this.enable();
        }
        BtnListener.prototype.enable = function () {
            var _this = this;
            for (var i = 0; i < this.buttons.length; i++) {
                this.buttons[i].addEventListener("click", function (e) { return _this.handleEvt(e); });
            }
        };
        BtnListener.prototype.disable = function () {
            for (var i = 0; i < this.buttons.length; i++) {
                this.buttons[i].removeEventListener("click", this.handleEvt);
            }
        };
        BtnListener.prototype.handleEvt = function (e) {
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
        };
        return BtnListener;
    })();
    controller.BtnListener = BtnListener;
})(controller || (controller = {}));
//# sourceMappingURL=BtnListener.js.map