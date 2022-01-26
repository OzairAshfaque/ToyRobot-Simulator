import { ItableDimensions } from '../_interface/itable-dimensions';

export class TableDimensions implements ItableDimensions {
  Rows: number;
  Columns: number;

  constructor(object?: ItableDimensions) {
    if (object) {
      this.Rows = object.Rows;
      this.Columns = object.Columns;
    }
  }

  clear() {
    this.Rows = null;
    this.Columns = null;
  }
}
