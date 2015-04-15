/// <reference path="Direction.ts" />
/// <reference path="IPosObject.ts" />
/// <reference path="Dot.ts" />

module model {

    export class Piece implements Dot {

        private position:IPosObject;
        private size:number;

        constructor(position: IPosObject, size:number) {
            this.position = position;
            this.size = size;
        }

        getPosition():IPosObject {
            return this.position;
        }

        getSize():number {
            return this.size;
        }
    }

}