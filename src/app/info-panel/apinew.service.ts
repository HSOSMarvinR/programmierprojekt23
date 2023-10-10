import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApinewService {
  constructor(private httpClient: HttpClient,) {}

  postRequest(endpoint: string, file: FormData, params?: any): Observable<any> {
    const url = `https://programmierprojekt-ujgmkp4tpq-ez.a.run.app/${endpoint}`;
    
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
      return this.httpClient.post(url, file, { params: httpParams });
  }

  public async runKMeansEuclidean(ifile: File, options?: {
    k?: number;
    normMethod?: string;
  }): Promise<any> {
    const file = new FormData();
    file.append('file', ifile);

    const params = {
      k: options?.k,
      normMethod: options?.normMethod,
    };

    return this.postRequest('kmeans/euclidean', file, params);
  }

  public async runKMeansManhattan(ifile: File, options?: {
    k?: number;
    normMethod?: number;
   /*  r?: number;
    maxCentroidsAbort?: number;
    minPctElbow?: number;
    c?: number; */
  }): Promise<any> {
    const file = new FormData();
    file.append('file', ifile);

    const params = {
      k: options?.k,
      normMethod: options?.normMethod,
      /* r: options?.r,
      maxCentroidsAbort: options?.maxCentroidsAbort,
      minPctElbow: options?.minPctElbow,
      c: options?.c, */
    };

    return this.postRequest('kmeans/manhattan', file, params);
  }

}


/* import { NgModule, InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import axios, { AxiosRequestConfig } from 'axios';

// Define an injection token for the base URL
export const BASE_URL = new InjectionToken<string>('BASE_URL');

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [
    ApinewService,
    // Provide the base URL using the injection token
    { provide: BASE_URL, useValue: 'https://programmierprojekt-ujgmkp4tpq-ez.a.run.app' },
  ],
})
export class ApinewService {
  private baseUrl: string = 'https://programmierprojekt-ujgmkp4tpq-ez.a.run.app';

  
  private async post(endpoint: string, file: any, params?: any): Promise<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    const config: AxiosRequestConfig = { params };
    
    try {
      const response = await axios.post(url, file, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async runKMeansEuclidean(ifile: File, options?: {
    k?: number,
    normMethod?: string,
    r?: number,
    maxCentroidsAbort?: number,
    minPctElbow?: number,
    c?: number,
  }): Promise<any> {
    const file = new FormData();
    file.append('file', ifile);

    const params = {
      k: options?.k,
      normMethod: options?.normMethod,
      r: options?.r,
      maxCentroidsAbort: options?.maxCentroidsAbort,
      minPctElbow: options?.minPctElbow,
      c: options?.c,
    };

    return this.post('kmeans/euclidean', file, params);
  }

  public async runKMeansManhattan(ifile: File, options?: {
    k?: number,
    normMethod?: number,
    r?: number,
    maxCentroidsAbort?: number,
    minPctElbow?: number,
    c?: number,
  }): Promise<any> {
    const file = new FormData();
    file.append('file', ifile);

    const params = {
      k: options?.k,
      normMethod: options?.normMethod,
      r: options?.r,
      maxCentroidsAbort: options?.maxCentroidsAbort,
      minPctElbow: options?.minPctElbow,
      c: options?.c,
    };

    return this.post('kmeans/manhattan', file, params);
  }
}

 */