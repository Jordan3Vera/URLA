import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { SubjectService } from 'src/app/shared/service/subject.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService,
              private page: Title,
              private subjectSvc: SubjectService ) 
  { }

  subjectItems: any[] = [];
  responsiveOptions: any[] = [];

  ngOnInit(): void {
    this.page.setTitle("Facultad IS");
    this.subjectSvc.Subjects().subscribe({
      next: (data) => {
        console.log(data);
        let j = Object.values(data);
        j.map(x => this.subjectItems = x);
      },
      error: (err) => {
        throw new Error("Error" + err);
      }
    });
    
    this.responsiveOptions = [
      {
        breakpoint: '1024px', 
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px', 
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px', 
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}
