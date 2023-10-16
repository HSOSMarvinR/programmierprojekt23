import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  // Dieser Service verwaltet hochgeladene Dateien

  private uploadedFiles: File[] = []; // Array zur Speicherung hochgeladener Dateien
  private fileToUpload: File | null = null; // Ausgewählte Datei zum Hochladen

  addFile(file: File) {
    // Methode zum Hinzufügen einer Datei zum Array
    this.uploadedFiles.unshift(file); // Neue Datei wird am Anfang des Arrays hinzugefügt
  }

  getFiles(): File[] {
    // Methode zum Abrufen der hochgeladenen Dateien
    return this.uploadedFiles; // Gibt das Array mit den hochgeladenen Dateien zurück
  }

  getMarkedFile(i: number): File | null {
    // Methode zum Abrufen einer ausgewählten Datei
    if (this.uploadedFiles.length > 0) {
      this.fileToUpload = this.uploadedFiles[i];
      return this.fileToUpload; // Gibt die ausgewählte Datei zurück
    }
    return null; // Gibt null zurück, wenn keine Datei ausgewählt wurde
  }

  deleteFile(index: number) {
    // Methode zum Löschen einer Datei
    this.uploadedFiles.splice(index, 1); // Entfernt die Datei aus dem Array
  }

  deleteAllFiles(){
    // Methode zum Löschen aller Dateien
    this.uploadedFiles = []; // Setzt das Array zurück, um alle Dateien zu löschen
  }

  performLocalCalculation(file: File, options?: {
    k?: number,
    normMethod?: string,
    r?: number,
    maxCentroidsAbort?: number,
    minPctElbow?: number,
    c?: number,
  }){
   
  }

  public readFileData(file: File): Promise<any> {
    // Methode zum Lesen von Dateidaten
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        try {
// Parse the file data based on the file type (e.g., CSV, JSON)
          const parsedData = this.parseFileData(event.target.result, file.type);
          console.log(parsedData);
          resolve(parsedData);
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = (error) => {
        reject(error);
      };

// Read the file as text
      reader.readAsText(file);
    });
  }

  private parseFileData(data: string, fileType: string): any {
    // Methode zum Parsen von Dateidaten basierend auf dem Dateityp
    switch (fileType) {
      case 'text/csv':
        return this.parseCSV(data); // CSV-Daten parsen
      case 'application/json':
        return this.parseJSON(data); // JSON-Daten parsen
      default:
        throw new Error(`Unsupported file type: ${fileType}`);
    }
  }

  private parseCSV(data: string): any[] {
    // Methode zum Parsen von CSV-Daten
    const rows = data.split('\n');

// Überprüfenn, ob die erste Zeile mindestens eine Zahl enthält
    const firstRowHasNumbers = rows[0].split(',').some(cell => !isNaN(Number(cell.trim())));

    if (!firstRowHasNumbers) {
// Erste Zeile ignorieren, wenn sie keine Zahl enthält
        rows.shift();
    }

    return rows.map((row) => row.split(',').map(cell => cell.trim()));
  }

  private parseJSON(data: string): any {
    // Methode zum Parsen von JSON-Daten
    return JSON.parse(data);
  }
}
