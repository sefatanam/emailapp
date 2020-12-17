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

interface ISignupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  isSignedIn$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
  }

  usernameAvailable(username: string): any {
    return this.http.post<IUsernameAvailableResponse>(`${this.rootUrl}/auth/username`, {
      username
    }, {withCredentials: true});
  }

  signup(credentials: ISignupCredentials): any {
    return this.http.post<ISignupResponse>(`${this.rootUrl}/auth/signup`, credentials)
      .pipe(
        tap(() => {
          this.isSignedIn$.next(true);
        }));
  }

  checkAuth() {
    return this.http.get(`${this.rootUrl}/auth/signedin`, {withCredentials: true})
      .pipe(
        tap((response) => {
          console.log(response);
        })
      );
  }

}
