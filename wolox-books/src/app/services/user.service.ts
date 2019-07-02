import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = 'https://wbooks-api-stage.herokuapp.com/api/v1';

  constructor( private http: HttpClient) {}

  createUser(post: any): Observable<any>{
    return this.http.post(`${this.url}/users`, post);
 }
}
