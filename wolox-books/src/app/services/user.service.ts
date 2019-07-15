import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../../environments/environment';
<<<<<<< HEAD
=======

>>>>>>> guard

@Injectable({
  providedIn: 'root'
})

export class UserService {
<<<<<<< HEAD
  urlApi = environment.urlBase;
=======
  urlApi = environment.urlApi;
>>>>>>> guard

  constructor(
    private http: HttpClient,
    private store: LocalStorageService
  ) {}
<<<<<<< HEAD
 
=======
>>>>>>> guard
  createUser(post: any): Observable<any> {
    return this.http.post(`${this.urlApi}/users`, post);
  }

  createSession(post: any): Observable<any> {
    return this.http.post(`${this.urlApi}/users/sessions`, post);
  }

<<<<<<< HEAD
  loggedIn(){
    return !!this.store.getValue('access_token');
  }

  getToken() {
    return this.store.getValue('access_token');
=======
  loggedIn() {
    return !!this.store.getValue('access_token');
>>>>>>> guard
  }
}
