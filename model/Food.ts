/// <reference path="Direction.ts" />
/// <reference path="IPosObject.ts" />
/// <reference path="Dot.ts" />

module model {

    export class Food implements IDot {

        private position:IPosObject;
        private size:number;
        private _color:string;

        constructor(position: IPosObject, size:number, color:string) {
            this.position = position;
            this.size = size;
            this._color = color;
        }

        getPosition():IPosObject {
            return this.position;
        }

        getSize():number {
            return this.size;
        }

        get color():string {
            return this._color;
        }
    }

}