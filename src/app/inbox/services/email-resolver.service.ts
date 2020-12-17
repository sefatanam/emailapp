import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {IEmail} from "../interfaces/iemail";
import {EmailService} from "./email.service";

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<IEmail> {

  constructor(private emailService: EmailService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEmail> | Promise<IEmail> | IEmail {
    const {id} = route.params;
    return this.emailService.getEmail(id);
  }

}
