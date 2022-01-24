import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToyRobot } from '../_class/toy-robot';
import { Itable } from '../_interface/itable';
import { TableDimensionResponse } from '../_response/table-dimension-response';


@Injectable({
  providedIn: 'root'
})
export class InitializationService {
 baseUrl = environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

 initialization(){
    return this.httpClient.get<Itable>(this.baseUrl+"api/toyrobot/initialization");
  }
}
