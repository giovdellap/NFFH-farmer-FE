import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  logged: boolean = false;
  token: string = "";
  name: string = "";

  subject: BehaviorSubject<boolean> = new BehaviorSubject(this.logged);

  constructor() { }

  getObservable() {
    return this.subject as Observable<boolean>;
  }

  setUser(token : string, name : string) {
    this.token = token;
    this.name = name;
    this.logged = true;
    this.subject.next(this.logged);
  }

  getToken() {
    return this.token;
  }

  getName() {
    return this.name;
  }
}
