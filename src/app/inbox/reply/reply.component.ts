import {Component, Input, OnInit} from '@angular/core';
import {IEmail} from "../interfaces/iemail";
import {EmailService} from "../services/email.service";

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  showModal: false;
  @Input() email: IEmail;

  constructor(private emailService: EmailService) {
  }

  ngOnInit(): void {
    const text = this.email.text.replace(/\n/gi, '\n> ');
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE ${this.email.subject}`,
      text: `\n\n\n---------- ${this.email.from} wrote :\n ${text}`
    };
  }

  onSubmit(email: IEmail) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
