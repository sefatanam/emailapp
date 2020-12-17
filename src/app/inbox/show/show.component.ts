import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IEmail} from "../interfaces/iemail";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  email: IEmail;

  constructor(
    private route: ActivatedRoute) {
    this.route.data.subscribe(({email}) => {
      this.email = email;
    });
  }

  ngOnInit(): void {  }

}
