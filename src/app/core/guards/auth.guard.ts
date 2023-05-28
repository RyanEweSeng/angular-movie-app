import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    let role = "";
    this.userService.role$.subscribe(res => {
      role = res;
    });

    if (role === "ADMIN" || role === "SUPERUSER") {
      return true;
    }

    // Redirect to a different route or display an error message
    return this.router.parseUrl('/change');
  }
}
