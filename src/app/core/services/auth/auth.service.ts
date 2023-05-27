import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4231';
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private usernameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private role = "";

  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  username$: Observable<string> = this.usernameSubject.asObservable();

  constructor(private http: HttpClient) { }

  get getRole(): string {
    return this.role;
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

  loginUser(formValue: { email: string, password: string }) {
    const url = `${this.apiUrl}/auth/signin`;
    const payload = {
      email: formValue.email,
      password: formValue.password
    };
    
    this.http.post<Object>(url, payload).subscribe(res => {
      const response = res as { accessToken: string, role: string };
      this.usernameSubject.next(formValue.email);
      this.isLoggedInSubject.next(true);
      this.role = response.role;
    });
  }

  logoutUser() {
    this.usernameSubject.next("");
    this.isLoggedInSubject.next(false);
    this.role = "";
  }
}
