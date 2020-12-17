import {Component, OnInit} from '@angular/core';
import {IEmail} from "../interfaces/iemail";
import {AuthService} from "../../auth/services/auth.service";
import {EmailService} from "../services/email.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  showModal: boolean;
  email: IEmail;

  constructor(
    private authService: AuthService,
    private emailService: EmailService) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: "",
      from: `${authService.username}@angular-email.com`
    };
  }

  ngOnInit(): void {
  }

  onSubmit(email: IEmail) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
