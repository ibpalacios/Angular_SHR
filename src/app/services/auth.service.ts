import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdministratorModel } from '../models/administrator';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // readonly URL = 'https://localhost:44367/api/Login';
  readonly URL = 'https://localhost:44367/api/Login';
  
  
  constructor(private http: HttpClient, private router: Router) { }

  login(admin: AdministratorModel){
    return this.http.post(`${this.URL}/auth`, admin).toPromise();
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
