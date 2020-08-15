import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { CustomerModel } from '../../../models/customer';
import { environment } from '../../../../environments/environment.prod';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  arrCustomers: CustomerModel [] = [];
  inactive = environment.inactive;
  active = environment.active;
  searchText: any;

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomer(this.active).then((res: any) => {
      this.arrCustomers = res.cnt
      console.log(res.cnt);
    }).catch(err => {
      console.log(err);
    });
  }

  deleteCustomer(id){

    this.customerService.delCustomer(id, this.inactive).then(res => {
      
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
