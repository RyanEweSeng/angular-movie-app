import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    let role = '';
    this.authService.role$.subscribe(res => {
      role = res;
    });

    if (role === 'ADMIN' || role === 'SUPERUSER') {
      return true;
    }

    if (role) {
      return this.router.parseUrl('/change');
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
