import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private uploadedFiles: File[] = [];
  private fileToUpload: File | null = null;

  addFile(file: File) {
    this.uploadedFiles.unshift(file);
  }

  getFiles(): File[] {
    return this.uploadedFiles;
  }

  getMarkedFile(i: number): File | null {
    if (this.uploadedFiles.length > 0) {
      this.fileToUpload = this.uploadedFiles[i];
      return this.fileToUpload;
    }
    return null;
  }
  deleteFile(index: number) {
    this.uploadedFiles.splice(index, 1);
  }

  deleteAllFiles(){
    this.uploadedFiles = [];
    alert("hallo" + this.uploadedFiles.toLocaleString);
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
  // Method to read file data and parse it
  public readFileData(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        try {
          // Parse the file data based on the file type (e.g., CSV, JSON)
          const parsedData = this.parseFileData(event.target.result, file.type);
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

  // Method to parse file data based on file type
  private parseFileData(data: string, fileType: string): any {
    switch (fileType) {
      case 'text/csv':
        // Implement CSV parsing logic
        return this.parseCSV(data);
      case 'application/json':
        // Implement JSON parsing logic
        return this.parseJSON(data);
      // Add more cases as needed for other file types
      default:
        throw new Error(`Unsupported file type: ${fileType}`);
    }
  }

  // Example CSV parsing method (you may need a library for more complex cases)
  private parseCSV(data: string): any[] {
    // Implement CSV parsing logic
    // Example: Split data by lines and commas
    const rows = data.split('\n');
    return rows.map((row) => row.split(',').map(cell => cell.trim())); 
  }

  // Example JSON parsing method (you may need a library for more complex cases)
  private parseJSON(data: string): any {
    // Implement JSON parsing logic
    return JSON.parse(data);
  }


}