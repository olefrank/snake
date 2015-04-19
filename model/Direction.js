var model;
(function (model) {
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Right"] = 1] = "Right";
        Direction[Direction["Down"] = 2] = "Down";
        Direction[Direction["Left"] = 3] = "Left";
    })(model.Direction || (model.Direction = {}));
    var Direction = model.Direction;
})(model || (model = {}));
//# sourceMappingURL=Direction.js.map