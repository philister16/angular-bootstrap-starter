import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse, AuthFormValue } from './auth.interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  registerUser(formValue: AuthFormValue): Observable<AuthResponse> {
    const { email, password } = formValue;
    console.log(password);
    return this.http.post<AuthResponse>(environment.api, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(err => this.handleError(err))
      );
  }

  private handleError(err) {
    let message: string;
    if (err.error.error.errors) {
      message = err.error.error.errors[0].message;
    } else {
      message = 'GENERAL_ERROR';
    }
    return throwError(message);
  }
}
