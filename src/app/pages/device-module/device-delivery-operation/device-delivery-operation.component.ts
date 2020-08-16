import { RetirementStatusService } from '../../../services/retirement-status.service';
import { RepairStatusService } from '../../../services/repair-status.service';
import { RetirementStatusModel } from '../../../models/retirementStatus';
import { environment } from '../../../../environments/environment.prod';
import { CustomerService } from '../../../services/customer.service';
import { RepairStatusModel } from 'src/app/models/repairStatus';
import { OrderService } from '../../../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerModel } from 'src/app/models/customer';
import { OrderModel } from '../../../models/order';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';








declare var $: any;

@Component({
  selector: 'app-device-delivery-operation',
  templateUrl: './device-delivery-operation.component.html',
  styleUrls: ['./device-delivery-operation.component.css']
})
export class DeviceDeliveryOperationComponent implements OnInit {

  objOrder: OrderModel = new OrderModel();
  arrRetirementStatus: RetirementStatusModel[] = [];
  arrRepairStatus: RepairStatusModel[] = [];
  arrCustomers: CustomerModel[] = [];
  active = environment.active;
  idOrder: string;

  constructor(private retirementStatusService: RetirementStatusService, private customerService: CustomerService, private repairStatusService: RepairStatusService, private activatedRoute: ActivatedRoute, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      $('.selectpicker').selectpicker('refresh');
      }, 0);
      this.idOrder = this.activatedRoute.snapshot.params.id;
      this.GetCustomer(this.idOrder);
      this.getRetirementStatus();
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

      this.router.navigate(['/device-delivery-list']);
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

  getRetirementStatus(){
    this.retirementStatusService.getRetirementStatus().then((res: any) => {
      this.arrRetirementStatus = res.cnt;
    }).catch(err => {
      console.log(err);
    });
  }

}
