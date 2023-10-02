import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginRequest, LoginResponse } from '../model/connectionModel';
import { mockUser } from '../utils/mock';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /** SERVICE MODE
   * 1 : API (connected to server)
   * 2: Mock
   */
  serviceMode = 2;
  url = "";

  constructor(private http: HttpClient, private user: UserService) { }

  login(email: string, password: string) {
    if (this.serviceMode == 1) {
      const req: LoginRequest = {
        email: email,
        password: password
      }
      return this.http.post<LoginResponse>(this.url+'/login', req).pipe(
        tap(x => this.user.setUser(x.token, x.name))
      )
    }
    else {
      this.user.setUser(mockUser.token, mockUser.name)
      return new Observable<LoginResponse>(observer => {
        observer.next(mockUser);
        observer.complete();
      })
    }
  }


}
