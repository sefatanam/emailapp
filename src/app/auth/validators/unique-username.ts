import {Injectable} from "@angular/core";
import {FormControl} from "@angular/forms";
import {catchError, map} from "rxjs/operators";
import {of} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable({providedIn: 'root'})

export class UniqueUsername {
  constructor(private authService: AuthService) {
  }

  validate = (formControl: FormControl) => {
    const {value} = formControl;
    return  this.authService.usernameAvailable(value)
      .pipe(
        map(response => {
          if (response["available"]) {
            return null;
          }
        }),
        catchError(err => {
          return err.error.username ? of({nonUserUniqueName: true}) : of({noConnection: true});
        })
      );
  }
}
