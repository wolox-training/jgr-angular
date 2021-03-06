import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Book } from '../screens/auth/screens/book-list/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  urlApi = environment.urlApi;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>  {
    return this.http.get<Book[]>(`${this.urlApi}/books`);
  }

  getBookById(id: any): any {
    return this.http.get(`${this.urlApi}/books/${id}`);
  }
}
