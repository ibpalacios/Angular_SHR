import { RepairStatusService } from '../../../services/repair-status.service';
import { environment } from '../../../../environments/environment.prod';
import { CustomerService } from '../../../services/customer.service';
import { RepairStatusModel } from '../../../models/repairStatus';
import { OrderService } from '../../../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerModel } from '../../../models/customer';
import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../../models/order';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';





declare var $: any;

@Component({
  selector: 'app-order-tracking-operation',
  templateUrl: './order-tracking-operation.component.html',
  styleUrls: ['./order-tracking-operation.component.css']
})
export class OrderTrackingOperationComponent implements OnInit {

  arrRepairStatus: RepairStatusModel[] = [];
  objOrder: OrderModel = new OrderModel();
  arrCustomers: CustomerModel[] = [];
  active = environment.active;
  customerName: string;
  idOrder: string;

  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute, private router: Router,private customerService: CustomerService, private repairStatusService: RepairStatusService) { }

  ngOnInit(): void {
    setTimeout(() => {
      $('.selectpicker').selectpicker('refresh');
    }, 0);
    this.idOrder = this.activatedRoute.snapshot.params.id;
    this.GetCustomer(this.idOrder);
    this.getRepairStatus();
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

      this.router.navigate(['/tracking-order-list']);
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

  getRepairStatus(){
    this.repairStatusService.getRepairStatus().then((res: any) => {
      this.arrRepairStatus = res.cnt;
      console.log(this.arrRepairStatus);
    }).catch(err => {
      console.log(err);
    });
  }
}
