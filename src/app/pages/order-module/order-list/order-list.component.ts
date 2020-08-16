import { environment } from '../../../../environments/environment.prod';
import { OrderService } from '../../../services/order.service';
import { OrderModel } from '../../../models/order';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  arrOrder: OrderModel [] = [];
  active = environment.active;
  inactive = environment.inactive;
  searchText: any;

  constructor(private orderService: OrderService, ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrder(this.active).then((res: any) => {
      this.arrOrder = res.cnt;
      console.log(this.arrOrder);
    }).catch(err => {
      console.log(err);
    });
  }

  deleteOrder(id){
    this.orderService.delOrder(id, this.inactive).then(res => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Eliminado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
      
      this.ngOnInit();
    }).catch(err => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al eliminar',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }
}
