import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser, ILogin } from '../model/login.interface';
import { CookieService } from 'ngx-cookie-service';

// API FAKE 
const APIFAKE = environment.APIFAKE;

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient,
              private cookieSvc: CookieService) 
  { }

  header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE'
  });


  //Para iniciar sesión
  login(user: ILogin): Observable<ILogin>{
    return this.http.post<ILogin>(APIFAKE + 'login', user, {headers: this.header});
  }

  // Este es solo para que el cliente vea los usuario que está en el sitio 
  getUser(): Observable<IUser>{
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
      'Authorization': 'Bearer ' + this.cookieSvc.get('token')
    });

    return this.http.get<IUser>(APIFAKE + 'users', {headers: header})
      .pipe(map((res: any) => {
        return res;
      }));
  }

  // Para agregar usuario 
  postUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(APIFAKE + 'users', user, {headers: this.header});
  }

  // Para actualizar datos del usuario e incluye la contraseña 
  putUser(user: IUser): Observable<IUser>{
    return this.http.put<IUser>(APIFAKE + `users/${user.id}`, user, {headers: this.header});
  }

  // Para eliminar un usuario, también ayuda para que el usuario pueda eliminar su cuenta 
  deleteUser(id: number): Observable<IUser>{
    return this.http.delete<IUser>(APIFAKE + `users/${id}`);
  }
  //********************************************************************************************************************** */
  setToken(token: string){
    this.cookieSvc.set('token',token);
  }

  getToken(){
    return this.cookieSvc.get('token');
  }
}
