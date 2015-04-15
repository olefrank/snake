/// <reference path="../model/Direction.ts" />
/// <reference path="../model/Snake.ts" />

module controller {

    export interface IEventListener {

        enable():void

        disable():void

        handleEvt(e):void

    }

}