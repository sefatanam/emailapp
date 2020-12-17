import {Component, OnInit} from '@angular/core';
import {EmailService} from "../services/email.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  emails = [];

  constructor(private emailService: EmailService) {
  }

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((emails) => {
      this.emails = emails;
    });
  }

}
