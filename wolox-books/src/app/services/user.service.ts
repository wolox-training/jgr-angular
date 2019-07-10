import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  urlUser = 'https://wbooks-api-stage.herokuapp.com/api/v1';
  urlSession = 'https://private-anon-7dacad45b6-wbooksapi.apiary-mock.com/api/v1/users';

  constructor(private http: HttpClient, private store: LocalStorageService) { }
 
  createUser(post: any): Observable<any> {
    return this.http.post(`${this.urlUser}/users`, post);
  }

  createSession(post: any): Observable<any> {
    return this.http.post(`${this.urlSession}/sessions`, post);
  }

  loggedIn(){
    return !!this.store.getValue('access_token');
  }
}
