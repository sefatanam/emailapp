import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isSignedIn: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.isSignedIn$.subscribe((signedInStatus) => {
      this.isSignedIn = signedInStatus;
    });
  }
}
