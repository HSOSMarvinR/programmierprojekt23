import { NgModule, InjectionToken } from '@angular/core';
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
  private baseUrl: string = 'https://programmierprojekt-ujgmkp4tpq-ez..run.qpp/kmeans/csv?k=X';

  
  private async post(endpoint: string, data: any, params?: any): Promise<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    const config: AxiosRequestConfig = { params };
    
    try {
      const response = await axios.post(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async runKMeansEuclidean(file: File, options?: {
    k?: number,
    normMethod?: string,
    r?: number,
    maxCentroidsAbort?: number,
    minPctElbow?: number,
    c?: number,
  }): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);

    const params = {
      k: options?.k,
      normMethod: options?.normMethod,
      r: options?.r,
      maxCentroidsAbort: options?.maxCentroidsAbort,
      minPctElbow: options?.minPctElbow,
      c: options?.c,
    };

    return this.post('kmeans/euclidean', formData, params);
  }

  public async runKMeansManhattan(file: File, options?: {
    k?: number,
    normMethod?: number,
    r?: number,
    maxCentroidsAbort?: number,
    minPctElbow?: number,
    c?: number,
  }): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);

    const params = {
      k: options?.k,
      normMethod: options?.normMethod,
      r: options?.r,
      maxCentroidsAbort: options?.maxCentroidsAbort,
      minPctElbow: options?.minPctElbow,
      c: options?.c,
    };

    return this.post('kmeans/manhattan', formData, params);
  }
}

