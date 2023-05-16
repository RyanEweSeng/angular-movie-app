import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4231';

  constructor(private http: HttpClient) { }

  checkEmailExists(email: string): Observable<boolean> {
    const url = `${this.apiUrl}/auth/check-email`;
    return this.http.post<boolean>(url, { email });
  }

  registerUser(formValue: { username: string, email: string, password: string, role: string, tmdb_key: string }): Observable<boolean> { 
    const url = `${this.apiUrl}/auth/signup`;
    const payload = {
      username: formValue.username,
      email: formValue.email,
      password: formValue.password,
      role: formValue.role.toUpperCase(),
      tmdb_key: formValue.tmdb_key
    };
    return this.http.post<boolean>(url, payload);
  }

  loginUser(formValue: { email: string, password: string }): Observable<boolean> {
    const url = `${this.apiUrl}/auth/signin`;
    const payload = {
      email: formValue.email,
      password: formValue.password
    };
    return this.http.post<boolean>(url, payload);
  }
}
