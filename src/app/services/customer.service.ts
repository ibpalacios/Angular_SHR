import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerModel } from '../models/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly URL = 'https://localhost:44367/api';

  constructor(private http: HttpClient) { }

  getCustomer(){
    return this.http.get(`${URL}/Customer/obtener`).toPromise();
  }

  postCustomer(model: CustomerModel){
    return this.http.post(`${URL}/Customer/obtener`, model).toPromise();
  }

  updateCustomer(){

  }
}
