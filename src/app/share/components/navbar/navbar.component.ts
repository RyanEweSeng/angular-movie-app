import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username$!: Observable<string>;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.username$ = this.authService.username$;
  }

  logout(): void {
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }
}
