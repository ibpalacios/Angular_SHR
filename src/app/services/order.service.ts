import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { OrderModel } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  readonly URL = environment.URL;

  constructor(private http: HttpClient) { }

  getOrder(idStatus: string){
    return this.http.get(`${this.URL}/order/obtenerActivosC/${idStatus}`).toPromise();
  }

  getOrderE(idStatus: string, idRepairS: string){
    return this.http.get(`${this.URL}/order/obtenerActivosE/${idStatus}/${idRepairS}`).toPromise();
  }

  getOrderById(idOrder: string){
    return this.http.get(`${this.URL}/order/obtenerPorId/${idOrder}`).toPromise();
  }
  postOrder(model: OrderModel){
    return this.http.post(`${this.URL}/order/registrarOrden`, model).toPromise();
  }

  putOrder(idOrder: string, model: OrderModel){
    return this.http.put(`${this.URL}/order/actualizarOrden/${idOrder}`, model).toPromise();
  }

  delOrder(idOrder: string, idStatus: string){
    return this.http.delete(`${this.URL}/order/eliminar/${idOrder}/${idStatus}`).toPromise();
  }
}
