import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4231';
  // private apiUrl = 'https://nest-movie-backend.onrender.com';

  private usernameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private roleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  username$: Observable<string> = this.usernameSubject.asObservable();
  role$: Observable<string> = this.roleSubject.asObservable();

  constructor(private http: HttpClient) { console.log('auth service constructor called', this) }

  checkEmailExists(email: string): Observable<boolean> {
    const url = `${this.apiUrl}/auth/check-email`;
    return this.http.post<boolean>(url, { email });
  }

  registerUser(formValue: { username: string, email: string, password: string, role: string, tmdb_key: string }): Observable<any> { 
    const url = `${this.apiUrl}/auth/signup`;
    const payload = {
      username: formValue.username,
      password: formValue.password,
      email: formValue.email,
      role: formValue.role,
      tmdb_key: formValue.tmdb_key
    };

    return this.http.post<Object>(url, payload).pipe(
      tap((res: any) => {
        console.log("register response");
        console.log(res);
        localStorage.setItem('token', res.accessToken);
        this.updateSubject(res.accessToken, res.role);
      })
    );
  }

  loginUser(formValue: { email: string, password: string }): Observable<Object> {
    const url = `${this.apiUrl}/auth/signin`;
    const payload = {
      email: formValue.email,
      password: formValue.password
    };
    
    return this.http.post<Object>(url, payload).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.accessToken);
        this.updateSubject(res.accessToken, res.role);
      }),
    );
  }

  changeRole(formValue: { role: string }): Observable<any> {
    const url = `${this.apiUrl}/auth/userupdate`;
    const payload = {
      role: formValue.role,
    }

    return this.http.patch<Object>(url, payload).pipe(
      tap((res: any) => {
        console.log('change role response');
        console.log(res);
        this.updateSubject(res.accessToken, res.role);
      })
    );
  }

  logoutUser(): void {
    console.log('logout called');
    this.usernameSubject.next('');
    this.roleSubject.next('');
    localStorage.removeItem('token');
  }

  private updateSubject(token: string, role: string): void {
    const jwtHelper = new JwtHelperService();
    const decodedAccessToken = jwtHelper.decodeToken(token);

    console.log('prev username:' + this.usernameSubject.value);
    console.log('prev role:' + this.roleSubject.value);
    console.log('emitting next value...');
    this.usernameSubject.next(decodedAccessToken.username);
    this.roleSubject.next(role);
    console.log('next username:' + this.usernameSubject.value);
    console.log('next role:' + this.roleSubject.value);
  }
}
