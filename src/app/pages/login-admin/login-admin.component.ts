import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AdministratorModel } from '../../models/administrator';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  btnIngresar: boolean = false;
  errorType: any;

  constructor(private auth: AuthService, private router: Router) { }

  admin: AdministratorModel = new AdministratorModel();
  
 

  ngOnInit(): void {
  }

  login(forma: NgForm){
    //console.log(this.admin);
    this.btnIngresar = true;
    this.auth.login(this.admin).then((res: any) => {
      console.log(res);

      localStorage.setItem('token', res.token);

      if(res.token){
        this.btnIngresar = false;

        this.router.navigate(['/dashboard']);

        Swal.fire({
          title: `Hola ${res.cnt.strUser} bienvenido`,
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        Swal.fire({
          title: res.error.msg,
          icon: 'error',
          showConfirmButton: false,
          timer: 1500
        });
      }

    }).catch(err => {

      if (err.status !== 0) {
        this.errorType = err.err;
      }else{
        //Este error puede surgir si el servidor no esta ejecutandose o por un mal consumo o llamado de la API.
        this.errorType = `ERROR_DE_CONEXIÓN: ${err.name}, Error al conectar con el servidor`;
      }

      Swal.fire({
        text: this.errorType,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });

      forma.reset();
      this.btnIngresar = false;

      console.log(err);
    });
  }

}
