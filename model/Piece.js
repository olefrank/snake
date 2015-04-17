/// <reference path="Direction.ts" />
/// <reference path="IPosObject.ts" />
/// <reference path="Dot.ts" />
var model;
(function (model) {
    var Piece = (function () {
        function Piece(position, size, color) {
            this.position = position;
            this.size = size;
            this.color = color;
        }
        Piece.prototype.getPosition = function () {
            return this.position;
        };
        Piece.prototype.getSize = function () {
            return this.size;
        };
        Piece.prototype.getColor = function () {
            return this.color;
        };
        Piece.prototype.setColor = function (color) {
            this.color = color;
            ;
        };
        return Piece;
    })();
    model.Piece = Piece;
})(model || (model = {}));
//# sourceMappingURL=Piece.js.map