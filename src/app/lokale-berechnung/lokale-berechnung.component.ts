import { Component } from '@angular/core';

type Point = {
  x: number;
  y: number;
};

type Cluster = {
  centroid: Point;
  points: Point[];
};

@Component({
  selector: 'app-lokale-berechnung',
  templateUrl: './lokale-berechnung.component.html',
  styleUrls: ['./lokale-berechnung.component.css']
})

export class LokaleBerechnungComponent {

  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  startClustering() {
    if (this.selectedFile) {
      this.performLocalClustering(this.selectedFile);
    } else {
      console.error('Bitte wählen Sie eine Datei aus.');
    }
  }

  performLocalClustering(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target?.result as string;
      const data = this.parseFileContent(fileContent);

      // Hier fügen Sie die Integration des k-Means-Algorithmus ein
      const k = 3; // Beispielwert für die Anzahl der Cluster
      const maxIterations = 10; // Beispielwert für maximale Iterationen

      const clusters = this.kMeans(data, k, maxIterations);

      // Jetzt können Sie die Ergebnisse nutzen, z.B., um das Diagramm zu aktualisieren
      console.log('Cluster Ergebnisse:', clusters);
    };

    reader.readAsText(file);
  }

  parseFileContent(fileContent: string): Point[] {
    const lines = fileContent.split('\n');
    const points: Point[] = [];

    lines.forEach(line => {
      const values = line.split(',').map(value => parseFloat(value.trim()));
      points.push({ x: values[0], y: values[1] });
    });

    return points;
  }

  calculateDistance(p1: Point, p2: Point): number {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  }

  calculateCentroid(points: Point[]): Point {
    const sum = points.reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }), { x: 0, y: 0 });
    return { x: sum.x / points.length, y: sum.y / points.length };
  }

  assignPointsToClusters(clusters: Cluster[], points: Point[]): void {
    for (const point of points) {
      let minDistance = this.calculateDistance(point, clusters[0].centroid);
      let index = 0;

      for (let i = 1; i < clusters.length; i++) {
        const distance = this.calculateDistance(point, clusters[i].centroid);
        if (distance < minDistance) {
          minDistance = distance;
          index = i;
        }
      }

      clusters[index].points.push(point);
    }
  }

  kMeans(points: Point[], k: number, maxIterations: number): Cluster[] {
    const clusters: Cluster[] = [];

    // Randomly select initial centroids
    for (let i = 0; i < k; i++) {
      clusters.push({
        centroid: points[Math.floor(Math.random() * points.length)],
        points: []
      });
    }

    for (let iter = 0; iter < maxIterations; iter++) {
      // Assign points to clusters
      for (const cluster of clusters) cluster.points = [];
      this.assignPointsToClusters(clusters, points);

      // Recalculate centroids
      for (const cluster of clusters) {
        cluster.centroid = this.calculateCentroid(cluster.points);
      }
    }

    return clusters;
  }
}
