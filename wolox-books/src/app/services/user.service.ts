import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  urlApi = environment.urlApi;

  constructor(private http: HttpClient) { }

  createUser(post: any): Observable<any> {
    return this.http.post(`${this.urlApi}/users`, post);
  }

  createSession(post: any): Observable<any> {
    return this.http.post(`${this.urlApi}/users/sessions`, post);
  }
}
