import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdministratorModel } from '../models/administrator';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly URL = environment.URL;
  
  constructor(private http: HttpClient, private router: Router) { }

  login(admin: AdministratorModel){
    return this.http.post(`${this.URL}/admin/iniciarSesion`, admin).toPromise();
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/loginAdmin']);
  }
}
