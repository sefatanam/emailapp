import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface IEmailSummary {
  id: string;
  subject: string;
  from: string;
}

interface IEmail {
  id: string;
  subject: string;
  text: string;
  to: string;
  from: string;
  html: string;
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

  getEmail(id: string) {
    return this.http.get<IEmail>(`${this.rootUrl}/emails/${id}`);
  }
}
