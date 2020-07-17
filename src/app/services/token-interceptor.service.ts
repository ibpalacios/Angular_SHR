import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req, next){
    const tokenizeReq = req.clone({
      setHeader: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }

}
