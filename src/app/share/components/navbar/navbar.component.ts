import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username$!: Observable<string>;

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void { 
    this.username$ = this.userService.username$;
  }

  logout(): void {
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }
}