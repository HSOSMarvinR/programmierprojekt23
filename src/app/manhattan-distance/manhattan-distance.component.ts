import { Component } from '@angular/core';

@Component({
  selector: 'app-manhattan-distance',
  templateUrl: './manhattan-distance.component.html',
  styleUrls: ['./manhattan-distance.component.css']
})
export class ManhattanDistanceComponent {

  // Nötig sind die Koordinaten der beiden Punkte (x1,y1) und (x2,y2) als Argumente beim Aufruf der Funktion. 
  // Math.abs gibt die absolute Zahl zurück, da die Distanz zwischen 2 Punkten immer positiv sein sollte.
  manhattanDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

// Beispielaufruf
Beispielaufruf() {

  let distance = this.manhattanDistance(1, 2, 4, 6); // Ergebnis: 7
  console.log(distance); // Gibt 7 aus
  
  }

// Wir brauchen also noch eine Art Array mit den Punkten, zwischen denen die Entfernung berechnet werden soll. 

}
