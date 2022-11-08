import { Component, Inject, OnInit } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
              private page: Title) 
  { }

  ngOnInit(): void {
    this.page.setTitle("Registrarse");
  }

}
