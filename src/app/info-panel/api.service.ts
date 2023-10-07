import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://programmierprojekt-ujgmkp4tpq-ez..run.qpp/kmeans/csv?k=X'

  constructor(private http: HttpClient) { }

  pushData(number: Number){
    this.http.patch(this.apiUrl, number);
  }

  getData() {
    return this.http.get(this.apiUrl);
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(this.apiUrl, formData);
  }

  
}
