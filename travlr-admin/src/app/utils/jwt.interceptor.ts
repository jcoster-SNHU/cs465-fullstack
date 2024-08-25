import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable,Provider } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';


export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  @Injectable()
export class jwtInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService
    ) {}
    intercept(request: HttpRequest<any>, next: HttpHandler):
Observable<HttpEvent<any>> {
var isAuthAPI: boolean;

// console.log('Interceptor::URL' + request.url);
if(request.url.startsWith('login') ||
request.url.startsWith('register')) {
isAuthAPI = true;
}
else {
isAuthAPI = false;
}
if(this.authenticationService.isLoggedIn() && !isAuthAPI) {
let token = this.authenticationService.getToken();
// console.log(token);
const authReq = request.clone({
setHeaders: {
Authorization: `Bearer ${token}`
}
});
return next.handle(authReq);
}
return next.handle(request);
}
}


  return next(req);
};
export const authInterceptProvider: Provider =
{ provide: HTTP_INTERCEPTORS,
useClass: jwtInterceptor, multi: true };
