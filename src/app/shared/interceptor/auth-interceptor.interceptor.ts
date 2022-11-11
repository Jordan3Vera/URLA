import { Injectable, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,private cookieSvc: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = this.cookieSvc.get('token');

    if(!token){
      return next.handle(request);
    }

    const req1 = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });
    
    return next.handle(req1);
  }
}
