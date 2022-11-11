import { Component, Inject, OnInit } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../../../../shared/model/login.interface';
import { AuthenticateService } from 'src/app/shared/auth/authenticate.service';
import { first } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
              private page: Title,
              private router: Router,
              private cookie: CookieService,
              private authSvc: AuthenticateService) 
  { }

  isLoggedIn: boolean = false;
  loginForm: any = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  ngOnInit(): void {
    this.page.setTitle("Iniciar sesión");
    this.storage.set('isLoggedIn',this.isLoggedIn);
    this.cookie.delete('token');
    this.storage.remove('user');
  }

  // Methods 
  loginApiFake(){
    const user: ILogin = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    if(user){
      this.authSvc.login(user)
        .pipe(first()).subscribe({
          next: (data) => {
            if(data){
              Swal.fire({
                icon: 'success',
                title: 'Logueo exitoso <span style="color: green; font-fize:2em;">☺</span>',
                text: 'Los datos son correctos',
                showConfirmButton: false,
                timer: 2000
              }).then((res) => {
                if(res){
                  this.storage.set('isLoggedIn', true);
                  this.cookie.set('token',data.accessToken);
                  this.storage.set('user',data.user?.firstname + ' ' + data.user?.lastname);
                  this.router.navigate(['dashboard']);
                }
              });
            }else{ //revisar
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El correo o la contraseña son incorrectos',
                showConfirmButton: false,
                timer: 2000
              })
            }
          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Ups ☹ !',
              text: 'No se pudo llevar a cabo la petición',
              showConfirmButton: false,
              timer: 2000
            }).then((res: any) => {
              if(res){
                throw new Error(err);
              }
            });
          }
        });
    }
  }

}
