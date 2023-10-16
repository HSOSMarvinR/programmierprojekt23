import { Injectable, ɵsetAlternateWeakRefImpl } from '@angular/core';
import { kmeans as KMeans } from 'ml-kmeans';
import { FileService } from './file.service';


@Injectable({
  providedIn: 'root'
})


export class KMeansService {

  data: string[][] = [];
  clusters: any[] = [];

    // Funktion zur Berechnung der euklidischen Distanz
  private euclideanDistance(pointA: number[], pointB: number[]): number {
    return Math.sqrt(
      pointA.reduce((sum, value, index) => sum + Math.pow(value - pointB[index], 2), 0)
    );
  }


  // Funktion zur Berechnung der Manhattan-Distanz
  private manhattanDistance(pointA: number[], pointB: number[]): number {
    return pointA.reduce((sum, value, index) => sum + Math.abs(value - pointB[index]), 0);
  }


    // Methode zur Anwendung des 'Elbow Method' Algorithmus
  private elbowMethod(data: number[][], maxClusters: number, distanceMetric: string): number {
    const ssd: number[] = []; // Sum of Squared Distances for different cluster numbers
    const distanceFunction = distanceMetric === 'EUCLIDEAN' ? this.euclideanDistance : this.manhattanDistance;


    for (let i = 1; i <= maxClusters; i++) {
      const result = KMeans(data, i, { distanceFunction });
      let currentSSD = 0;



      for (let j = 0; j < data.length; j++) {
        const centroid = result.centroids[result.clusters[j]];
        currentSSD += distanceFunction(data[j], centroid) ** 2;
      }
      ssd.push(currentSSD);

    }
 // Änderungsrate von SSD (erste Ableitung) berechnen
 const ratesOfChange = ssd.slice(1).map((value, index) => ssd[index] - value);



 // Zweite Ableitung berechnen
 const secondDerivative = ratesOfChange.slice(1).map((value, index) => ratesOfChange[index] - value);



 // Index des Maximalwerts in der zweiten Ableitung finden
 const elbowPoint = secondDerivative.indexOf(Math.max(...secondDerivative));


 // Optimale Anzahl Cluster zurückgeben
 return elbowPoint + 2; 

}
  // Funktion zum Bereinigen der Clustering-Daten
private cleanClusteringData(dataAsNumbers: number[][]): number[][] {
  const filteredData = dataAsNumbers.filter(row => {
    return row.every(value => !isNaN(value));
  });



  // Überprüfen, ob mehr als 25 % der Arrays entfernt wurden
  if (filteredData.length < dataAsNumbers.length * 0.75) {
    throw new Error('Mehr als 25% der Daten sind ungültig.');
  }
  return filteredData;
}

  // Methode zur Durchführung des K-Means-Clustering
public async performKMeans(file: File, k: number, useOptK: boolean, distanceMetric: string): Promise<any> {

  this.data = await this.fileService.readFileData(file);

  console.log(this.data);

  this.data = this.data.filter(row => row.some(value => value !== undefined && value !== ''));



  let dataAsNumbers = this.data.slice(1)
    .map(row => row.map(value => parseFloat(value)))
    .filter(row => row.length === this.data[1].length);



  dataAsNumbers = this.cleanClusteringData(dataAsNumbers);
  console.log(dataAsNumbers);


  if (useOptK) {
    k = this.elbowMethod(dataAsNumbers, 100, distanceMetric);
  }



  const result = KMeans(dataAsNumbers, k, { distanceFunction: distanceMetric === 'EUCLIDEAN' ? this.euclideanDistance : this.manhattanDistance });

  console.log(this.convertToJSONFormat(result, dataAsNumbers, file.name, distanceMetric));
  return this.convertToJSONFormat(result, dataAsNumbers, file.name, distanceMetric);
}

  // Funktion zur Konvertierung des Ergebnisses in das JSON-Format
private convertToJSONFormat(result: any, data: number[][], fileName: string, distanceMetric: string) {
  if (this.data.length === 0 || this.data[0].length < 2) {
    console.error('Invalid CSV data format');
  }



  const xLabel = this.data[0][0];
  const yLabel = this.data[0][1];



  const clusters = result.centroids.map((centroid: number[], index: number) => {
    const points = data.filter((_, dataIndex) => result.clusters[dataIndex] === index);
    return {
      clusterNr: index,
      centroid: { x: centroid[0], y: centroid[1] },
      points: points.map(point => ({ x: point[0], y: point[1] }))
    };
  });



  return {
    name: `K-Means Ergebnis von: ${fileName}`,
    cluster: clusters,
    x_label: xLabel,
    y_label: yLabel,
    iterations: result.iterations,
    used_distance_metric: distanceMetric,
    k_value: 1
  };
}

constructor(private fileService: FileService) {}
}