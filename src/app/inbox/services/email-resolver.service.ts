import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {EMPTY, Observable} from "rxjs";
import {IEmail} from "../interfaces/iemail";
import {EmailService} from "./email.service";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<IEmail> {

  constructor(
    private emailService: EmailService,
    private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEmail> | Promise<IEmail> | IEmail {
    const {id} = route.params;
    return this.emailService.getEmail(id)
      .pipe(
        catchError(() => {
          this.router.navigateByUrl('/inbox/not-found');
          return EMPTY;
        })
      );
  }

}
