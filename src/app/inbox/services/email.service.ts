import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IEmail} from "../interfaces/iemail";
import {IEmailSummary} from "../interfaces/iemail-summary";


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

  sendEmail(email: IEmail) {
    return this.http.post(`${this.rootUrl}/emails`, email);
  }
}
