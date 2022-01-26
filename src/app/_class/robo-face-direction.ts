import { Directions } from '../_enum/directions';
import { IroboFaceDirection } from '../_interface/irobo-face-direction';

export class RoboFaceDirection implements IroboFaceDirection {
  Direction: Directions;

  constructor(object?: IroboFaceDirection) {
    if (object) {
      this.Direction = object.Direction;
    }
  }

}
