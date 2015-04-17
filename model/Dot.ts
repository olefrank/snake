/// <reference path="IPosObject.ts" />

module model {

    export interface IDot {

        getPosition():IPosObject
        getSize():number
        getColor():string

    }

}