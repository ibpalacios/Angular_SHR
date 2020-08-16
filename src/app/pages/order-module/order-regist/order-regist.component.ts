import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerModel } from '../../../models/customer';
import { CustomerService } from '../../../services/customer.service';
import { environment } from '../../../../environments/environment.prod';
import { OrderService } from '../../../services/order.service';
import { OrderModel } from '../../../models/order';
import Swal from 'sweetalert2';

declare var $: any;




@Component({
  selector: 'app-order-regist',
  templateUrl: './order-regist.component.html',
  styleUrls: ['./order-regist.component.css']
})
export class OrderRegistComponent implements OnInit {

  objOrder: OrderModel = new OrderModel();
  arrCustomers: CustomerModel[] = [];
  noRetirement = environment.noRetirement;
  initial = environment.initial;
  active = environment.active;
  refresh: boolean = false;
  
  constructor(private customerService: CustomerService, private OrderService: OrderService) { }

  ngOnInit(): void {
    setTimeout(() => {
      $('.selectpicker').selectpicker('refresh');
      }, 0);
    this.getCustomer();
  }

  saveOrder(form: NgForm){
    this.objOrder.idRegistrationStatus = this.active;
    this.objOrder.idRepairStatus = this.initial;
    this.objOrder.idRetirementStatus = this.noRetirement;
    this.objOrder.dteRetirementDate = null;
    this.objOrder.strStatusComment = "";
    console.log(this.objOrder.dteDateOfAttention);
    this.OrderService.postOrder(this.objOrder).then((res:any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro guardado exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
    }).catch(err => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Erro al registrar orden',
        showConfirmButton: false,
        timer: 2000
      })
    });
  }

  getCustomer(){
    this.customerService.getCustomer(this.active).then((res: any) => {
      this.arrCustomers = res.cnt;
      console.log(this.arrCustomers);
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      }, 0);
      
    }).catch(err => {
      console.log(err);
    });
  }


}
