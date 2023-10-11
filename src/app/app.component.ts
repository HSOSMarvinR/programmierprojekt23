import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'K-Means Clustering';
  apiResponse: any;

  handleApiResponse(e: Event){
    this.apiResponse = e;
  }
}
