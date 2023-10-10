import { Injectable } from '@angular/core';
import { kmeans } from 'ml-kmeans';

@Injectable({
  providedIn: 'root',
})
export class LocalcalculationService {
  constructor() {}

  calculateKMeans(data: number[][], k: number,options: any): any {
    const result = kmeans(data, k, options);
    return result;
  }
}