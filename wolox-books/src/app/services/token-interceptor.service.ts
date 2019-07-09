import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }
  store: any;
  token: any;

  intercept (req, next) {
    this.store= new LocalStorageService();
    this.token = this.store.getValue('access_token');
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.token
      }
    })
    return next.handle(tokenizedReq)
  }
}
