import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private uploadedFiles: File[] = [];
  private fileToUpload: File | null = null;

  addFile(file: File) {
    this.uploadedFiles.push(file);
  }

  getFiles(): File[] {
    return this.uploadedFiles;
  }

  getMarkedFile(): File | null {
    if (this.uploadedFiles.length > 0) {
      this.fileToUpload = this.uploadedFiles[0];
      return this.fileToUpload;
    }
    return null;
  }
  deleteFile(index: number) {
    this.uploadedFiles.splice(index, 1);
  }
}