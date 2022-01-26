import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TableDimensions } from '../_class/table-dimensions';
import { ItableDimensions } from '../_interface/itable-dimensions';

@Injectable({
  providedIn: 'root',
})
export class InitializationService {
  baseUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  initialization() {
    return this.httpClient.get<TableDimensions>(
      this.baseUrl + 'api/toyrobot/initialization'
    );
  }
}
