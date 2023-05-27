import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4231';
  private loggedIn = false;
  private username = "";

  constructor(private http: HttpClient) { }

  get isLoggedIn(): boolean {
    return this.loggedIn;
  }

  get getUsername(): string {
    return this.username;
  }

  set setLoggedIn(_: boolean) {
    this.loggedIn = true;
  }

  set setUsername(username: string) {
    this.username = username;
  }

  checkEmailExists(email: string): Observable<boolean> {
    const url = `${this.apiUrl}/auth/check-email`;
    return this.http.post<boolean>(url, { email });
  }

  registerUser(formValue: { username: string, email: string, password: string, role: string, tmdb_key: string }): Observable<Object> { 
    const url = `${this.apiUrl}/auth/signup`;
    const payload = {
      username: formValue.username,
      password: formValue.password,
      email: formValue.email,
      role: formValue.role,
      tmdb_key: formValue.tmdb_key
    };
    return this.http.post<Object>(url, payload);
  }

  loginUser(formValue: { email: string, password: string }): Observable<Object> {
    const url = `${this.apiUrl}/auth/signin`;
    const payload = {
      email: formValue.email,
      password: formValue.password
    };
    return this.http.post<Object>(url, payload);
  }

  logoutUser() {
    this.loggedIn = false;
    this.username = "";
  }
}