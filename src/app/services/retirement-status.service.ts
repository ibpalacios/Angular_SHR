import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class RetirementStatusService {

  readonly URL = environment.URL;

  constructor(private http: HttpClient) { }

  getRetirementStatus(){
    return this.http.get(`${this.URL}/retirementStatus/obtener`).toPromise();
  }
}
