import { Injectable } from '@angular/core';

// Injectable-Dekorator gibt an, dass dieser Service in der Root-Anwendung verfügbar ist
@Injectable({
    providedIn: 'root',
})
export class LocalcalculationService {
    constructor() { }

    // Berechnet die euklidische Distanz zwischen zwei Punkten
    euclideanDistance(point1: number[], point2: number[]): number {
        let sum = 0;
        for (let i = 0; i < point1.length; i++) {
            sum += Math.pow(point1[i] - point2[i], 2);
        }
        return Math.sqrt(sum);
    }

    // Initialisiert zufällige Zentroide
    initializeCentroids(data: number[][], k: number): number[][] {
        const centroids = [];
        const indices = new Set();
        while (indices.size < k) {
            const index = Math.floor(Math.random() * data.length);
            if (!indices.has(index)) {
                indices.add(index);
                centroids.push(data[index]);
            }
        }
        return centroids;
    }

    // Weist Datenpunkte den Clustern zu
    assignToClusters(data: number[][], centroids: number[][]): number[] {
        const clusters = new Array(data.length).fill(0);
        for (let i = 0; i < data.length; i++) {
            let minDistance = Infinity;
            let clusterIndex = -1;
            for (let j = 0; j < centroids.length; j++) {
                const distance = this.euclideanDistance(data[i], centroids[j]);
                if (distance < minDistance) {
                    minDistance = distance;
                    clusterIndex = j;
                }
            }
            clusters[i] = clusterIndex;
        }
        return clusters;
    }

    // Berechnet die Zentroide der Cluster
    calculateCentroids(data: number[][], clusters: number[], k: number): number[][] {
        const centroids = new Array(k).fill(null).map(() => new Array(data[0].length).fill(0));

        const clusterCounts = new Array(k).fill(0);
        for (let i = 0; i < data.length; i++) {
            const clusterIndex = clusters[i];
            clusterCounts[clusterIndex]++;
            for (let j = 0; j < data[i].length; j++) {
                centroids[clusterIndex][j] += data[i][j];
            }
        }

        for (let i = 0; i < k; i++) {
            for (let j = 0; j < centroids[i].length; j++) {
                centroids[i][j] /= clusterCounts[i];
            }
        }

        return centroids;
    }

    // Führt den K-Means-Algorithmus aus
    kmeans(data: number[][], k: number, maxIterations: number = 100): { centroids: number[][], clusters: number[] } {
        let centroids = this.initializeCentroids(data, k);
        let clusters: number[] = [];

        for (let i = 0; i < maxIterations; i++) {

            const prevCentroids = [...centroids];
            clusters = this.assignToClusters(data, centroids);
            centroids = this.calculateCentroids(data, clusters, k);

            // Überprüfen auf Konvergenz
            let converged = true;
            for (let j = 0; j < k; j++) {
                if (this.euclideanDistance(prevCentroids[j], centroids[j]) > 0.0001) {
                    converged = false;
                    break;
                }
            }

            if (converged) {
                break;
            }
        }

        return { centroids, clusters };
    }




}