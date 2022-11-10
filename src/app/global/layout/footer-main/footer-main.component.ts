import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer-main',
  templateUrl: './footer-main.component.html',
  styleUrls: ['./footer-main.component.scss']
})
export class FooterMainComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];
  languages: any[] = [];
  selectedLang: any;

  ngOnInit(): void {
    this.items = [
      { label: 'Términos y condiciones', icon: 'fa-solid pi-fw fa-file', styleClass: 'lang'},
      { label: 'Política y privacidad', icon: 'fa-solid pi-fw fa-lock', styleClass: 'lang'},
      { label: 'Seguridad', icon: 'fa-solid pi-fw fa-shield-halved', styleClass: 'lang'}
    ];

    this.languages = [
      { lang: 'Español' },
      { lang: 'Inglés' },
      { lang: 'Portugués' },
      { lang: 'Alemán' },
      { lang: 'Italiano' },
      { lang: 'Francés'}
    ];
  }

}
