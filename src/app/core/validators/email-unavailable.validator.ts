import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

export function emailUnavailableValidator(authService: AuthService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
    return authService.checkEmailExists(control.value).pipe(
      map(res => {
        return res ? null : { 'emailExists': false };
      }),
      catchError(() => {
        return of(null);
      })
    );
  };
}