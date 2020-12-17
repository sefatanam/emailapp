import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EmailService} from "../services/email.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService) {
  }

  ngOnInit(): void {
    // THIS IS HEAVY BRO !! 🤵
    /* this.route.params.subscribe(({id}) => {
       this.emailService.getEmail(id).subscribe(email => {
         console.log(email);
       });
     });*/

    this.route.params.pipe(
      switchMap(({id}) => {
        return this.emailService.getEmail(id);
      })
    ).subscribe((email) => {
      console.log(email);
    });

  }

}
