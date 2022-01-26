import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommandUpdateResponse } from '../_class/command-update-response';
import { ToyBehaviourResponse } from '../_class/toy-behaviour-response';
import { ToyRobot } from '../_class/toy-robot';

@Injectable({
  providedIn: 'root',
})
export class CommandService {
  baseUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  commandUpdate(body: CommandUpdateResponse) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    let options = { headers: headers };
    console.log(body);
    return this.httpClient.post<ToyRobot>(
      this.baseUrl + 'api/toyrobot/commandupdate',
      JSON.stringify(body),
      options
    );
  }
}
