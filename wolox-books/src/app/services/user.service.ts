import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  urlApi = environment.urlBase;

  constructor(
    private http: HttpClient,
    private store: LocalStorageService
  ) {}
 
  createUser(post: any): Observable<any> {
    return this.http.post(`${this.urlApi}/users`, post);
  }

  createSession(post: any): Observable<any> {
    return this.http.post(`${this.urlApi}/users/sessions`, post);
  }

  loggedIn(){
    return !!this.store.getValue('access_token');
  }

  getToken() {
    return this.store.getValue('access_token');
  }
}
