import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).timeout(5000).do(event => {}, err => { // override default timeout with 5000 ms
        if(err instanceof HttpErrorResponse){
            console.log("Error Caught By CustomHttpInterceptor");
        }
    });
  }
}