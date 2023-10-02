import { Component } from '@angular/core';

@Component({
  selector: 'app-euclidian-distance',
  templateUrl: './euclidian-distance.component.html',
  styleUrls: ['./euclidian-distance.component.css']
})
export class EuclidianDistanceComponent {


// Nötig sind die Koordinaten der beiden Punkte (x1,y1) und (x2,y2) als Argumente beim Aufruf der Funktion. 
// Mit Math.pow werden die Quadrate aus der Differenz der x-Werte und y-Werte berechnet.
// Die Quadrate werden addiert und die Wurzel aus dieser Summe gezogen --> Euklidische Distanz.
  euclideanDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }


  // Beispielaufruf
  exampleUsage() {
    let distance = this.euclideanDistance(1, 2, 4, 6); // Ergebnis: 5
    console.log(distance); // Gibt 5 aus

  }

}
