import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private authService: AuthService) { }

  checkLoginStatus(): boolean {
    return this.authService.isLoggedIn;
  }

  getUsername(): string {
    return this.authService.getUsername;
  }

  logout() {
    return this.authService.logoutUser();
  }
}
