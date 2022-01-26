import { Component, OnInit } from '@angular/core';

import { Position } from 'src/app/_class/position';
import { RoboFaceDirection } from 'src/app/_class/robo-face-direction';
import { ToyBehaviourResponse } from 'src/app/_class/toy-behaviour-response';
import { TableDimensions } from 'src/app/_class/table-dimensions';

import { CommandService } from 'src/app/_services/command.service';
import { InitializationService } from 'src/app/_services/initialization.service';
import { CommandUpdate } from 'src/app/_class/command-update';
import { CommandUpdateResponse } from 'src/app/_class/command-update-response';
import { ToyRobot } from 'src/app/_class/toy-robot';
import { ItoyRobot } from 'src/app/_interface/itoy-robot';
import { Directions } from 'src/app/_enum/directions';

@Component({
  selector: 'app-robot-simulator',
  templateUrl: './robot-simulator.component.html',
  styleUrls: ['./robot-simulator.component.css'],
})
export class RobotSimulatorComponent implements OnInit {
  table: any;

  colArray = [];
  rowArray = [];

  totalCoordinatesNumber: number = 0;
  position: Position;
  tableBoard: TableDimensions;
  faceDirection: RoboFaceDirection;
  command: string;
  commandUpdate: CommandUpdate;
  response: ToyBehaviourResponse; //Response sending in command

  report : string;



  toyRobot: ToyRobot; //Response coming for robot

  commandToExecute: CommandUpdateResponse;

  y_axis: number;

  commandText : Array<string>;

  public roboFaceDirections = Directions;

  constructor(
    private _initializationService: InitializationService,
    private _commandService: CommandService
  ) {}
  ngOnInit(): void {
  
    this.position = new Position();
    this.tableBoard = new TableDimensions();
    this.faceDirection = new RoboFaceDirection();
    this.response = new ToyBehaviourResponse();
    this.commandUpdate = new CommandUpdate();
    this.commandToExecute = new CommandUpdateResponse();
    this.commandText = new Array();
    this.initialization();

    this.commandUpdate.ToyBehaviourResponse = this.response;


    this.colArray = [];
    this.rowArray = [];
  }

  initialization() {
    this._initializationService.initialization().subscribe(
      (data) => {
        console.log(data.Columns);
        this.tableBoard = data;
        this.tableDimension(this.tableBoard.Rows, this.tableBoard.Columns);
        this.response.TableDimensions = this.tableBoard;

        // this.table = Array(this.tableDimensions.Columns).fill(0).map((x,i)=>i);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  tableDimension(rows: number, columns: number) {
    for (let i = 0; i < columns; i++) {
      this.colArray.push(i);
    }
    this.totalCoordinatesNumber = this.colArray.length - 1;
    for (let i = 0; i < rows; i++) {
      this.rowArray.push(i);
    }

    if (!(this.totalCoordinatesNumber == this.rowArray.length - 1)) {
      console.log('Reset App');
    }
  }
  conmmadUpdate() {
    this.report = null;
    this.commandToExecute.ComandToExecute = this.commandUpdate;
    this.commandText.push(this.commandToExecute.ComandToExecute.Command);
    console.log(this.commandToExecute);

    this._commandService.commandUpdate(this.commandToExecute).subscribe(
      (data) => {
        this.toyRobot = data;
        this.position = this.toyRobot.ToyRobot.Position;
        
        this.faceDirection = this.toyRobot.ToyRobot.RoboFaceDirection;

        this.response.Position = this.position;
        this.response.RoboFaceDirection= this.faceDirection;


        this.calculateY_axis();

        if(this.toyRobot.ToyRobot.Report != null){
          this.report = this.toyRobot.ToyRobot.Report;
          console.log(this.report);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  calculateY_axis() {
    this.y_axis = this.totalCoordinatesNumber - this.position.Y;
  }
}
