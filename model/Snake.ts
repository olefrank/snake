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

        constructor(pieces:Array<Piece>, direction:Direction, ctrl:controller.GameController) {
            this._pieces = pieces;
            this._direction = direction;
            this._eating = false;
            this.ctrl = ctrl;
        }

        get pieces():Array<Piece> { return this._pieces; }

        get direction():Direction { return this._direction; }
        set direction(direction:Direction) { this._direction = direction; }

        get eating():boolean { return this._eating; }
        set eating(val:boolean) { this._eating = val; }

        getHead():Piece { return this._pieces[this._pieces.length-1]; }

        move():void {
            // create new head
            this.grow();
            // remove old tail
            this._pieces.splice(0,1);
        }

        grow():void {
            this._pieces.push( this.createNewPiece() );
        }

        createNewPiece() {
            var coord = Object.create(this.getHead().getPosition());

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

            return new Piece(coord, this.ctrl.dotSize);
        }

        limitCoord(coord:number, length:number):number {
            return ( coord % length + length) % length;
        }

    }

}