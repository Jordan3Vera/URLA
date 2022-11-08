import { Component, Inject, OnInit } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
              private page: Title) 
  { }

  ngOnInit(): void {
    this.page.setTitle("Iniciar sesión");
  }

}
