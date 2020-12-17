import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


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

  constructor(private http: HttpClient) {
  }

  usernameAvailable(username: string): any {
    return this.http.post<IUsernameAvailableResponse>(`${this.rootUrl}'/auth/username`, {
      username
    });
  }

  signup(credentials: ISignupCredentials): any {
    return this.http.post<ISignupResponse>(`${this.rootUrl}/auth/signup`, credentials);
  }
}
