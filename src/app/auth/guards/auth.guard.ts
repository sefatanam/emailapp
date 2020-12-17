import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {skipWhile, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isSignedIn$.pipe(
      skipWhile(value => value === null),
      take(1)
    );
  }
}

