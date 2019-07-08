import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class BookService  implements HttpInterceptor{
  urlBooks = 'https://private-anon-e30a1eb423-wbooksapi.apiary-mock.com/api/v1/books';
  //books: any = `${this.urlBooks}/books`;
  token: any =  this.store.getValue('access_token');

  constructor(private http: HttpClient, private store: LocalStorageService) { }

  intercept(req, next): Observable<any> {
    
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type' , 'application/json');
    headers = headers.append('Accept'       , 'application/json',);
    headers = headers.append('Authorization', this.token);
    return this.http.get(this.urlBooks, {headers});
    
    // req = this.http.get(this.urlBooks);
    // let tokenizeReq = req.clone({
    //   setHeaders: {
    //     'Content-Type' : 'application/json',
    //     'Accept'       : 'application/json',
    //     'Authorization': this.token
    //   },
    // })
    // return next.handle(tokenizeReq);
  }
}
