import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

export function emailAvailableValidator(authService: AuthService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
    return authService.checkEmailExists(control.value).pipe(
      map(res => {
        return res ? { 'emailExists': true } : null;
      }),
      catchError(() => {
        return of(null);
      })
    );
  };
}
