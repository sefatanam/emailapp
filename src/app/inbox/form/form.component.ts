import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IEmail} from "../interfaces/iemail";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  emailForm: FormGroup;
  @Input() email: IEmail;
  @Output() emailSubmit = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    const {subject, from, to, text} = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({value: from, disabled: true}),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    });
  }


  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }
    this.emailSubmit.emit(this.emailForm.value);
  }
}
