/// <reference path="Piece.ts" />
/// <reference path="Direction.ts" />
/// <reference path="IPosObject.ts" />
/// <reference path="Food.ts" />
/// <reference path="../controller/GameController.ts" />

module model {

    export class Snake {

        private _pieces:Array<Piece>;
        private _direction:Direction;
        private _eating:boolean;
        private ctrl:controller.GameController;
        private _directionQ:Array<Direction>;
//        private _color:string;

        constructor(pieces:Array<Piece>, direction:Direction, ctrl:controller.GameController) {
            this._pieces = pieces;
            this._direction = direction;
            this._eating = false;
            this.ctrl = ctrl;

            this._directionQ = [];
            this._directionQ.push(direction);
//            this._color = "black";
        }

        get pieces():Array<Piece> { return this._pieces; }
        set pieces(val:Array<Piece>) { this._pieces = val; }

        get direction():Direction { return this._direction; }

        queueDirection(direction:Direction):void {
            this._directionQ.push(direction);
        }

        private shiftDirection():Direction {
            return this._directionQ.shift();
        }

        get eating():boolean { return this._eating; }
        set eating(val:boolean) { this._eating = val; }

//        get color():string { return this._color; }
//        set color(val:string) { this._color = val; }

        getHead():Piece { return this._pieces[this._pieces.length-1]; }

        move():void {
            this.grow();
            this._pieces.splice(0,1);
        }

        grow():void {
            this._pieces.push( this.createNewPiece() );
        }

        private createNewPiece() {
            var coord = Object.create(this.getHead().getPosition());

            // get next direction from queue
            if (this._directionQ.length > 0) {
                this._direction = this.shiftDirection();
            }

            switch(this._direction) {
                case Direction.Up:
                    coord.y -= this.ctrl.dotSize;
                    coord.y = this.limitCoord(coord.y, this.ctrl.canvasHeight);
                    break;
                case Direction.Down:
                    coord.y += this.ctrl.dotSize;
                    coord.y = this.limitCoord(coord.y, this.ctrl.canvasHeight);
                    break;
                case Direction.Left:
                    coord.x -= this.ctrl.dotSize;
                    coord.x = this.limitCoord(coord.x, this.ctrl.canvasWidth);
                    break;
                case Direction.Right:
                    coord.x += this.ctrl.dotSize;
                    coord.x = this.limitCoord(coord.x, this.ctrl.canvasWidth);
                    break;
            }

            return new Piece(coord, this.ctrl.dotSize, this.getHead().getColor());
        }

        private limitCoord(coord:number, length:number):number {
            return ( coord % length + length) % length;
        }

    }

}