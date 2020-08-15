import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerModel } from '../models/customer';
import { environment } from '../../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  readonly URL = environment.URL;

  constructor(private http: HttpClient) { }

  getCustomer(id: string){
    return this.http.get(`${this.URL}/customer/obtenerActivos/${id}`).toPromise();
  }

  getCustomerById(idCustomer: string){
    return this.http.get(`${this.URL}/customer/obtenerPorId/${idCustomer}`).toPromise();
  }

  postCustomer(model: CustomerModel){
    return this.http.post(`${this.URL}/customer/registrar`, model).toPromise();
  }

  putCustomer(idCustomer: string, model: CustomerModel){
    return this.http.put(`${this.URL}/customer/actualizar/${idCustomer}`, model).toPromise();
  }

  delCustomer(idCustomer: string, idStatus: string){
    return this.http.delete(`${this.URL}/customer/eliminar/${idCustomer}/${idStatus}`).toPromise();
  }
}
