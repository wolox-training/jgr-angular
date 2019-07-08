import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  urlBook = 'https://private-anon-e30a1eb423-wbooksapi.apiary-mock.com/api/v1/books';
  //books: any = `${this.urlBook}/books`;
  token: any =  this.store.getValue('access_token');

  constructor(private http: HttpClient, private store: LocalStorageService) { }
 
  getCollection() {
   // console.log( 'TOKEN-->'+ this.token);
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    headers.set('Authorization', this.token);

    //this.http.get(this.urlBook, {headers}).subscribe(response=>{console.log(response)});

    this.http.get(this.urlBook, {headers}).subscribe(response=>{console.log(response)})
    return this.http.get(this.urlBook, {headers})
  }
}
