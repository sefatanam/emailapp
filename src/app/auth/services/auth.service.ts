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

interface ISigninResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  isSignedIn$ = new BehaviorSubject(null);
  username = '';

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
        tap((response) => {
          this.isSignedIn$.next(true);
          this.username = response.username;
        }));
  }

  checkAuth() {
    return this.http.get<ISignedinResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap(({authenticated, username}) => {
          this.isSignedIn$.next(authenticated);
          this.username = username;
        })
      );
  }

  signout() {
    return this.http.post(`${this.rootUrl}/auth/signout`, {})
      .pipe(
        tap(() => {
          this.isSignedIn$.next(false);
          this.username = '';
        })
      );
  }

  signin(credentials: ISigninCredentials) {
    return this.http.post<ISigninResponse>(`${this.rootUrl}/auth/signin`, credentials)
      .pipe(
        tap(({username}) => {
          this.isSignedIn$.next(true);
          this.username = username;
        })
      );
  }
}
