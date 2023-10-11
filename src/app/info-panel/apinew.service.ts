// Import-Anweisungen für Angular-Module und RxJS-Operatoren
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

// Dekorator, um den Service als Injectable zu kennzeichnen und global verfügbar zu machen
@Injectable({
  providedIn: 'root',
})
export class ApinewService {
  // Konstruktor des Dienstes mit der Injektion des HttpClient-Moduls
  constructor(private httpClient: HttpClient) {}

  // Methode zur Durchführung einer POST-Anfrage an einen API-Endpunkt
  postRequest(endpoint: string, file: FormData, options?: any): Observable<any> {
    // Zusammenstellen der vollständigen URL durch Hinzufügen des Endpunkts zum Basis-URL
    const url = `https://development-ujgmkp4tpq-ez.a.run.app/${endpoint}`;
    
    // Erstellen von HTTP-Query-Parametern aus einem options-Objekt
    const httpParams = new HttpParams({ fromObject: options });

    // Erstellen einer HttpRequest mit den angegebenen Parametern
    const request = new HttpRequest('POST', url, file, {
      params: httpParams,
      reportProgress: true,
      responseType: 'json',
      withCredentials: false
    });

    // Anzeigen der URL in einem Alert (kann für Debugging-Zwecke verwendet werden)
    //alert(url);

    // Ausführen der HTTP-Anfrage und Rückgabe des Observables
    return this.httpClient.request(request);
  }

  // Methode zur Ausführung des K-Means-Clustering-Algorithmus mit der euklidischen Distanz
  public runKMeansEuclidean(ifile: File, options?: {
    k?: number;
    normMethod?: number;
    csvDecimalSeparator?: string;
  }): Observable<any> {
    // Erstellen eines FormData-Objekts und Hinzufügen der Datei
    const file = new FormData();
    file.append('file', ifile, 'file.csv');

    // Erstellen eines options-Objekts mit optionalen Parametern
    const params = {
      k: options?.k,
      normMethod: options?.normMethod,
      csvDecimalSeparator: options?.csvDecimalSeparator,
    };

    // Aufrufen der allgemeinen postRequest-Methode mit spezifischem Endpunkt und Parametern
    return this.postRequest('kmeans/euclidean', file, params);
  }

  // Methode zur Ausführung des K-Means-Clustering-Algorithmus mit der Manhattan-Distanz
  public runKMeansManhattan(ifile: File, options?: {
    k?: number;
    normMethod?: number;
    csvDecimalSeparator?: string;
  }): Observable<any> {
    // Erstellen eines FormData-Objekts und Hinzufügen der Datei
    const file = new FormData();
    file.append('file', ifile);

    // Erstellen eines options-Objekts mit optionalen Parametern
    const params = {
      k: options?.k,
      normMethod: options?.normMethod,
      csvDecimalSeparator: options?.csvDecimalSeparator,
    };

    // Aufrufen der allgemeinen postRequest-Methode mit spezifischem Endpunkt und Parametern
    return this.postRequest('kmeans/manhattan', file, params);
  }
}
