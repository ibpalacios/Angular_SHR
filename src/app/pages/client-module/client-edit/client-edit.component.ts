import { CustomerService } from '../../../services/customer.service';
import { CustomerModel } from '../../../models/customer';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  objCustomer: CustomerModel = new CustomerModel();
  idCustoner: string;

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idCustoner = this.activatedRoute.snapshot.params.id;
    this.getCustomer(this.idCustoner);
  }

  getCustomer(id){
    this.customerService.getCustomerById(id).then((res: any) => {
      this.objCustomer = res.cnt;
      console.log(this.objCustomer);
    }).catch(err => {
      console.log(err);
    });
  }

  updateCustomer(form: NgForm){
    this.customerService.putCustomer(this.idCustoner, this.objCustomer).then(res => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registro actualizado correctamente',
        showConfirmButton: false,
        timer: 1500
      })

      this.router.navigate(['/client-list']);
    }).catch(err => {
      
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error en el sistema, no se actualizo en registro',
        showConfirmButton: false,
        timer: 1500
      })
    });
  }

}
