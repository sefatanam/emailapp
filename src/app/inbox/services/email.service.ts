
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface IEmailSummary {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {
  }

  getEmails() {
    return this.http.get<IEmailSummary[]>(`${this.rootUrl}/emails`); // for our interceptor by default its with credentials is true
  }
}
