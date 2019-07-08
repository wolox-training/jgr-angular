import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {
 
  urlBooks = 'https://private-anon-ea15534a5b-wbooksapi.apiary-mock.com/api/v1/booksgenretitleauthordescription';
  token: any =  this.store.getValue('access_token');

  constructor(private http: HttpClient, private store: LocalStorageService) { }

  test(): Observable<any>  {
    let headers = new HttpHeaders();
    headers.set('Authorization',this.token);
    return this.http.get(this.urlBooks, {headers});

  }
}
