import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (this.authService.getRole === "ADMIN" || this.authService.getRole === "SUPERUSER") {
      return true;
    }

    // Redirect to a different route or display an error message
    return this.router.parseUrl('/unauthorized'); // Replace '/unauthorized' with your desired unauthorized page route
  }
}
