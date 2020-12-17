import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {tap} from "rxjs/operators";


interface IUsernameAvailableResponse {
  available: boolean;
}

interface ISignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface ISigninCredentials {
  username: string;
  password: string;
}

interface ISignupResponse {
  username: string;
}

interface ISignedinResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  isSignedIn$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
  }

  usernameAvailable(username: string): any {
    return this.http.post<IUsernameAvailableResponse>(`${this.rootUrl}/auth/username`, {
      username
    });
  }

  signup(credentials: ISignupCredentials): any {
    return this.http.post<ISignupResponse>(`${this.rootUrl}/auth/signup`, credentials)
      .pipe(
        tap(() => {
          this.isSignedIn$.next(true);
        }));
  }

  checkAuth() {
    return this.http.get<ISignedinResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap(({authenticated}) => {
          this.isSignedIn$.next(authenticated);
        })
      );
  }

  signout() {
    return this.http.post(`${this.rootUrl}/auth/signout`, {})
      .pipe(
        tap(() => {
          this.isSignedIn$.next(false);
        })
      );
  }

  signin(credentials: ISigninCredentials) {
    return this.http.post(`${this.rootUrl}/auth/signin`, credentials)
      .pipe(
        tap(() => {
          this.isSignedIn$.next(true);
        })
      );
  }
}
