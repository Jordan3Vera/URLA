import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
              private router: Router,
              private cookieSvc: CookieService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

    if(!this.cookieSvc.get('token') && !this.storage.get('isLoggedIn')){
      Swal.fire({
        icon: 'error',
        title: 'Advertencia',
        html: `<span class="text-xl">Debe loguearte 😣</span>`,
        showConfirmButton: false,
        timer: 2000
      });
      this.router.navigate(['/main']);
      return false;
    }
    return true;
  }
  
}
