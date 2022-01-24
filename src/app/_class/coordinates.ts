import { Icoordinates } from "../_interface/icoordinates";

export class Coordinates implements Icoordinates {
    X: number;
    Y: number;

    constructor(object : Icoordinates){
        this.X = object.X;
        this.Y = object.Y;
    }

    clear(){
        this.X = null;
        this.Y = null;
    }
}
