import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { OrderrModel } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  readonly URL = environment.URL;

  constructor(private http: HttpClient) { }

  getOrder(idStatus: string){
    return this.http.get(`${this.URL}/order/obtenerActivosC/${idStatus}`).toPromise();
  }

  getOrderById(idOrder: string){
    return this.http.get(`${this.URL}/order/obtenerPorId/${idOrder}`).toPromise();
  }
  postOrder(model: OrderrModel){
    return this.http.post(`${this.URL}/order/registrarOrden`, model).toPromise();
  }
}
