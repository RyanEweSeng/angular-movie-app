import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "https://nest-movie-backend.onrender.com";

  constructor(private http: HttpClient, private userService: UserService) { }

  checkEmailExists(email: string): Observable<boolean> {
    const url = `${this.apiUrl}/auth/check-email`;
    return this.http.post<boolean>(url, { email });
  }

  registerUser(formValue: { username: string, email: string, password: string, role: string, tmdb_key: string }): void { 
    const url = `${this.apiUrl}/auth/signup`;
    const payload = {
      username: formValue.username,
      password: formValue.password,
      email: formValue.email,
      role: formValue.role,
      tmdb_key: formValue.tmdb_key
    };

    this.http.post<Object>(url, payload).subscribe(res => {
      console.log("register response")
      console.log(res);
    });
  }

  loginUser(formValue: { email: string, password: string }): void {
    const url = `${this.apiUrl}/auth/signin`;
    const payload = {
      email: formValue.email,
      password: formValue.password
    };
    
    this.http.post<Object>(url, payload).subscribe((res: any) => {
      console.log("login response")
      console.log(res);
      const decodedAccessToken = this.decodeToken(res.accessToken);

      localStorage.setItem("username", decodedAccessToken.username);
      localStorage.setItem("role", res.role);
      localStorage.setItem("token", res.accessToken);

      this.userService.username = decodedAccessToken.username;
      this.userService.role = res.role;
    });
  }

  updateRole(formValue: { role: string }): void {
    const url = `${this.apiUrl}/auth/userupdate`;
    const payload = {
      role: formValue.role,
    }

    this.http.patch<Object>(url, payload).subscribe((res: any) => {
      console.log("update role response")
      console.log(res);
      localStorage.setItem("token", res.accessToken);
      localStorage.setItem("role", res.role);
      this.userService.role = res.role;
    })
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
