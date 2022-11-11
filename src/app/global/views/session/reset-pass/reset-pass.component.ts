import { Component, Inject, OnInit } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
              private page: Title) 
  { }

  ngOnInit(): void {
    this.page.setTitle("Restablecer contraseña");
  }

}
