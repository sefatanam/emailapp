import {Component, OnInit} from '@angular/core';
import {IEmail} from "../interfaces/iemail";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  showModal: boolean;
  email: IEmail;

  constructor() {
    this.email = {
      id: "123",
      to: "me@email.com",
      subject: 'Kisuna',
      html: '<p>Chill pera nai</p>',
      text: "Naikka",
      from: "ang@ramil.com"
    };
  }

  ngOnInit(): void {
  }

}
