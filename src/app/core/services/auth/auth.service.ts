import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "http://localhost:4231";

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

    this.http.post<Object>(url, payload).subscribe((res: any) => {
      console.log("register response")
      console.log(res);
      this.updateDetails(res);
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
      this.updateDetails(res);
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
      this.updateDetails(res);
    })
  }

  logoutUser(): void {
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    this.userService.username = "";
    this.userService.role = "";
  }

  private updateDetails(response: any): void {
    const jwtHelper = new JwtHelperService();
    const decodedAccessToken = jwtHelper.decodeToken(response.accessToken);

    localStorage.setItem("username", decodedAccessToken.username);
    localStorage.setItem("role", response.role);
    localStorage.setItem("token", response.accessToken);

    this.userService.username = decodedAccessToken.username;
    this.userService.role = response.role;
  }
}
