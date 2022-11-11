import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
              private cookie: CookieService,
              private page: Title) 
  { }

  item: MenuItem[] = [];
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.item = [
      { label: 'Institución URLA', styleClass: 'title border-noround', visible: true, routerLink: '/main', disabled: false },
      { label: 'Iniciar sesion', styleClass: 'session', icon: 'pi pi-fw pi-user', routerLink: '/login'},
      { label: 'Registrarse', styleClass: 'session', icon: 'pi pi-fw pi-user-plus', routerLink: '/register'}
    ];
  }
}
