/// <reference path="Direction.ts" />
/// <reference path="IPosObject.ts" />

module model {

    export class Dot {

        private position:IPosObject;
        private size:number;
        private color:string;

        constructor(position: IPosObject, size:number, color:string) {
            this.position = position;
            this.size = size;
            this.color = color;
        }

        getPosition():IPosObject {
            return this.position;
        }

        getSize():number {
            return this.size;
        }

        getColor():string {
            return this.color;
        }

        setColor(color:string):void {
            this.color = color;
        }
    }

}