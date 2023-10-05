import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get("https://programmierprojekt-ujgmkp4tpq-ez..run.qpp/kmeans/csv?k=X")
  }

  pushData(){
    this.http.patch("https://programmierprojekt-ujgmkp4tpq-ez..run.qpp/kmeans/csv?k=X", null);
  }
}
