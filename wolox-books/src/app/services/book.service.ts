import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  urlApi = environment.urlBase;
  
  constructor(private http: HttpClient) { }

  getBooks(): Observable<any>  {
    return this.http.get(`${this.urlApi}/books`);
  }
}
