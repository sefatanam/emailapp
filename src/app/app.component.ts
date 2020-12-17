import {Component} from '@angular/core';
import {AuthService} from "./auth/services/auth.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isSignedIn$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.isSignedIn$ = this.authService.isSignedIn$;
  }

}
