import { Iposition } from './iposition';
import { IroboFaceDirection } from './irobo-face-direction';

import { ItableDimensions } from './itable-dimensions';

export interface ItoyRobot {
  TableDimensions: ItableDimensions;
  Position: Iposition;
  RoboFaceDirection: IroboFaceDirection;
}
