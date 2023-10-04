import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class DataService {

  constructor() { }

  startCalc(noteid: number): Observable<JSON>{
    return this.http.patch(this.path + noteid);
  }

  getCalc(noteid: number): Observable<JSON>{
    return this.http.get(this.path + noteid);
  }

}
