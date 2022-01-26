import { Iposition } from '../_interface/iposition';

export class Position implements Iposition {
  X: number;
  Y: number;

  constructor(object?: Iposition) {
    if (object) {
      this.X = object.X;
      this.Y = object.Y;
    }
  }
}
