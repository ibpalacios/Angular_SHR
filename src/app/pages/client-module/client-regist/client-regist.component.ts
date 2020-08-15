import { environment } from '../../../../environments/environment.prod';
import { CustomerService } from '../../../services/customer.service';
import { CustomerModel } from 'src/app/models/customer';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-client-regist',
  templateUrl: './client-regist.component.html',
  styleUrls: ['./client-regist.component.css']
})
export class ClientRegistComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  objCustomer: CustomerModel = new CustomerModel();
  active = environment.active;
  inactive = environment.inactive;

  ngOnInit(): void {

  }

  saveCutomer(form: NgForm){
    this.objCustomer.idRegistrationStatus = this.active;
    this.customerService.postCustomer(this.objCustomer).then((res: any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${res.cnt.strFullName} ha sido registrado`,
        showConfirmButton: false,
        timer: 1500
      })
      form.reset();
    }).catch(err => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `${err.error.msg}, Ingresa un nombre diferente`,
        showConfirmButton: false,
        timer: 2000
      })
    });
  }
}
