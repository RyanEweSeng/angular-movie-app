import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4231';

  constructor(private http: HttpClient, private userService: UserService) { }

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

  loginUser(formValue: { email: string, password: string }): void {
    const url = `${this.apiUrl}/auth/signin`;
    const payload = {
      email: formValue.email,
      password: formValue.password
    };
    
    // send request to backend to verify the login
    // also sets the username (in userService) and role fields
    this.http.post<Object>(url, payload).subscribe((res: any) => {
      // take access token and decode it
      const decodedAccessToken = this.decodeToken(res.accessToken);

      // store info
      localStorage.setItem("username", decodedAccessToken.username);
      localStorage.setItem("role", res.role);
      localStorage.setItem("token", decodedAccessToken);
      this.userService.username = decodedAccessToken.username;
      this.userService.role = res.role;
    });
  }

  logoutUser(): void {
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    this.userService.username = "";
    this.userService.role = "";
  }

  private decodeToken(token: string): any | null {
    const jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(token);
  }
}
