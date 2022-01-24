import { Directions } from "../_enum/directions";
import { IfaceDirection } from "../_interface/iface-direction";

export class FaceDirection implements IfaceDirection{
    Direction: Directions;

    constructor(object : IfaceDirection){
        this.Direction = object.Direction;
    }

    clear(){
        this.Direction = null;
    }
}
