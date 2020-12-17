import {Injectable} from "@angular/core";
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {filter, tap} from "rxjs/operators";


@Injectable()

export class AuthHttpInterceptor implements HttpInterceptor {
  // Override the boilerplate for implement interceptor
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // modify the outgoing request
    const modifiedReq = req.clone({
      withCredentials: true
    });
    return next.handle(modifiedReq)
      .pipe(
        filter(value => value.type === HttpEventType.Sent),
        tap(val => {
          console.log('Request Send');
        })
      );
  }
}
