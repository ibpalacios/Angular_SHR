import { environment } from '../../../../environments/environment.prod';
import { OrderService } from '../../../services/order.service';
import { OrderrModel } from '../../../models/order';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  arrOrder: OrderrModel [] = [];
  active = environment.active;
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

  }
}
