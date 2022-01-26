import { Iposition } from '../_interface/iposition';
import { IroboFaceDirection } from '../_interface/irobo-face-direction';
import { ItableDimensions } from '../_interface/itable-dimensions';

export class ToyBehaviourResponse {
  TableDimensions?: ItableDimensions;
  Position?: Iposition;
  RoboFaceDirection?: IroboFaceDirection;
  Report? :string;
}
