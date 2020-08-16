import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from '../../../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderModel } from '../../../models/order';
import Swal from 'sweetalert2';
import { CustomerService } from '../../../services/customer.service';
import { CustomerModel } from '../../../models/customer';
import { environment } from '../../../../environments/environment.prod';

declare var $: any;



@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  objOrder: OrderModel = new OrderModel();
  arrCustomers: CustomerModel[] = [];
  active = environment.active;
  idOrder: string;

  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute, private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    setTimeout(() => {
      $('.selectpicker').selectpicker('refresh');
    }, 0);
    this.idOrder = this.activatedRoute.snapshot.params.id;
    this.GetCustomer(this.idOrder);
    this.getCustomers();
  }

  GetCustomer(idOrder){
    this.orderService.getOrderById(idOrder).then((res: any) => {
      this.objOrder = res.cnt;
      setTimeout(() => {
        $('.selectpicker').selectpicker('refresh');
      }, 0);
    }).catch(err => {
      console.log(err);
    })
  }

  updateOrder(form: NgForm){
    this.orderService.putOrder(this.idOrder, this.objOrder).then(res => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro actualizado correctamente',
        showConfirmButton: false,
        timer: 1500
      })

      this.router.navigate(['/order-list']);
    }).catch(err => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al actualizar el registro',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }

  getCustomers(){
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
