import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ISubject } from '../model/subject.interface';
import { environment } from 'src/environments/environment';

// The jsons 
const apiSubject: any = environment.jsonSubjects;

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  Subjects(): Observable<ISubject>{
    return this.http.get<ISubject>(apiSubject)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}
