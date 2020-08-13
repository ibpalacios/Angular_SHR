import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { CustomerModel } from '../../../models/customer';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  arrCustomer: CustomerModel [] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomer().then((res: any) => {
      // this.arrCustomer = res;
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

}
