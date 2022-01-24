import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { InitializationService } from './_services/initialization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _initializationService : InitializationService){}
  title = 'ToyRobot Simulator';

  ngOnInit():void{

  }
}
