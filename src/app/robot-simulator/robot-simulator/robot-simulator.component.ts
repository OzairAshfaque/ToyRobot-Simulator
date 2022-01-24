import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/_class/table';
import { Itable } from 'src/app/_interface/itable';
import { InitializationService } from 'src/app/_services/initialization.service';

@Component({
  selector: 'app-robot-simulator',
  templateUrl: './robot-simulator.component.html',
  styleUrls: ['./robot-simulator.component.css']
})
export class RobotSimulatorComponent implements OnInit {

  tableDimensions : Itable;
  table : any;

  colArray = [];
  rowArray = [];
  colums:number = 0;
  rows :number = 0;

  constructor(private _initializationService : InitializationService) { }
  ngOnInit(): void {
    this.colArray = [];
    this.rowArray = [];
    this._initializationService.initialization().subscribe(
      data=>{
        console.log(data.Rows);
        this.rows = data.Rows;
        this.colums = data.Columns;
        console.log(this.rows);
        console.log(this.colums);
       // this.table = Array(this.tableDimensions.Columns).fill(0).map((x,i)=>i);
       this.tableDimention(this.rows, this.colums);
      },error=>{
        console.log(error);
      }
    );
    

  }
  tableDimention(rows:any,columns:any){
    console.log(this.rows);
    console.log(this.colums);
    for(let i = 0; i<this.colums; i++){
      this.colArray.push(i);
      console.log( this.colArray);
    }
    for(let i = 0; i<this.rows; i++){
      this.rowArray.push(i);
    }
  }

}
