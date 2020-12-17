import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/services/auth.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isSignedIn$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.isSignedIn$ = this.authService.isSignedIn$;
  }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(() => {
    });
  }

}
