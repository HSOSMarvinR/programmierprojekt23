import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Klasse für die App-Komponente
export class AppComponent {
  title = 'K-Means Clustering';

  apiResponse: any;
  localResponse: any;

  // Event-Handler, um die API-Antwort zu verarbeiten
  handleApiResponse(e: Event){
    this.apiResponse = e;
  }

  // Event-Handler, um die lokale Antwort zu verarbeiten
  handleLocalResponse(e: Event){
    this.localResponse = e;
  }
}
