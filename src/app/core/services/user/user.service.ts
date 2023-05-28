import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usernameSubject: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('username') || '');
  private roleSubject: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('role') || '');

  username$ = this.usernameSubject.asObservable();
  role$ = this.roleSubject.asObservable();

  constructor() { }

  set username(username: string) {
    this.usernameSubject.next(username);
  }

  set role(role: string) {
    this.roleSubject.next(role);
  }
}
