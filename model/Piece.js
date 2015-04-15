/// <reference path="Direction.ts" />
/// <reference path="IPosObject.ts" />
/// <reference path="Dot.ts" />
var model;
(function (model) {
    var Piece = (function () {
        function Piece(position, size) {
            this.position = position;
            this.size = size;
        }
        Piece.prototype.getPosition = function () {
            return this.position;
        };
        Piece.prototype.getSize = function () {
            return this.size;
        };
        return Piece;
    })();
    model.Piece = Piece;
})(model || (model = {}));
//# sourceMappingURL=Piece.js.map