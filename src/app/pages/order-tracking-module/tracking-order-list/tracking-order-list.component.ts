import { environment } from '../../../../environments/environment.prod';
import { OrderService } from '../../../services/order.service';
import { OrderModel } from '../../../models/order';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tracking-order-list',
  templateUrl: './tracking-order-list.component.html',
  styleUrls: ['./tracking-order-list.component.css']
})
export class TrackingOrderListComponent implements OnInit {

  arrOrder: OrderModel[] =[];
  active = environment.active;
  searchText: any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(){
    this.orderService.getOrder(this.active).then((res: any) => {
      this.arrOrder = res.cnt;
    }).catch(err => {
      console.log(err);
    });
  }


}
