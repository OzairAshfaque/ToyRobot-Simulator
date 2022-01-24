import { Itable } from "../_interface/itable";

export class Table implements Itable{
    Rows: number;
    Columns: number;

    constructor(object : Itable){
        this.Rows = object.Rows;
        this.Columns = object.Columns
    }

    clear(){
        this.Rows = null;
        this.Columns = null;
    }
}
