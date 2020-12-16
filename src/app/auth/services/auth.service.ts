import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


interface IUsernameAvailableResponse {
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  usernameAvailable(username: string): any {
    return this.http.post<IUsernameAvailableResponse>('https://api.angular-email.com/auth/username', {
      username
    });
  }
}
