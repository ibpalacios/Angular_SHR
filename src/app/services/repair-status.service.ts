import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class RepairStatusService {

  readonly URL = environment.URL;

  constructor(private http: HttpClient) { }

  getRepairStatus(){
    return this.http.get(`${this.URL}/repairStatus/obtener`).toPromise();
  }
}
