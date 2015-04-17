/// <reference path="Direction.ts" />
/// <reference path="IPosObject.ts" />
/// <reference path="Dot.ts" />

module model {

    export class Food implements IDot {

        private _position:IPosObject;
        private _size:number;
        private _color:string;

        constructor(position: IPosObject, size:number, color:string) {
            this._position = position;
            this._size = size;
            this._color = color;
        }

        getPosition():IPosObject {
            return this._position;
        }

        getSize():number {
            return this._size;
        }

        getColor():string {
            return this._color;
        }
    }

}