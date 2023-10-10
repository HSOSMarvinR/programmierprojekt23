import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ApinewService } from "./apinew.service";
import { FileService } from './file.service';
import { LocalcalculationService } from './localcalculation.service';
interface Normalisierung {
  name: string;
  code: string;
}

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css'],
  providers: [MessageService, FileService, ApinewService, LocalcalculationService]
})
export class InfoPanelComponent {
  useLocalCalculation: boolean = false; 
  fileToUpload: File | null = null;
  uploadedFilesData: any[] = [];
  uploadedFiles: any[] = [];

  normalisierung: Normalisierung[] | undefined;
  selectedNorm: Normalisierung | undefined;
  distanz: string = "man";
  berechnungOnOff: boolean | undefined;
  selectedDistanz: any[] = [
    { label: 'Manhattan Distanz', value: 'man' },
    { label: 'Euklidische Distanz', value: 'euk' }
  ];

  kvalue: number | undefined;
  checked: boolean = false;

  constructor(
    private messageService: MessageService,
    private ApinewService: ApinewService,
    private fileService: FileService,
    private localCalculationService: LocalcalculationService,
  ) {}

  ngOnInit(): void {
    this.normalisierung = [
      { name: 'Min/Max Normalisierung', code: '1' },
      { name: 'Robust Scaler', code: 'Robust' },
      { name: 'Z-Normalisierung', code: '2' },
    ];
    this.berechnungOnOff = true;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFile() {
    if (this.fileToUpload) {
      this.fileService.addFile(this.fileToUpload);
    }
  }

  onClickPush() {
    
    const useLocalCalculation = this.useLocalCalculation;
    const selectedFile = this.fileService.getMarkedFile();
    const kValue = this.kvalue || 5; // If kvalue is undefined, use default value 5
    

    if (this.selectedNorm == undefined) {
      this.messageService.add({ severity: 'error', summary: 'Fehler', detail: 'Normalisierung auswählen!' });
    } else if(selectedFile){
      const normMethod = this.selectedNorm.code; // Extracting code from selectedNorm
    if (useLocalCalculation) {
      // Perform local calculation
      alert("local");
      const options = {
        maxIterations: 100, // Specify appropriate values for your use case
        // Add other options as needed
      };
      // Assume you have a method to read data from the file
      this.fileService.readFileData(selectedFile).then((data: number[][]) => {
        // Perform local k-means calculation
        
        alert( this.calculateKMeans(data, this.kvalue || 5, 100));

       // console.log('Local calculation result:', result);
        //alert("Local Calculation Result: " + JSON.stringify(result));
      });
    }
      
    else{
  
      this.ApinewService.runKMeansEuclidean(selectedFile, {
        k: kValue,
        normMethod: normMethod})
        .subscribe(
          (response: any) => {
            console.log('API Response:', response);
            alert('API Response: ' + JSON.stringify(response));
          },
          (error: any) => {
            console.log('API Response:', error);
            alert('API Response: ' + JSON.stringify(error));
          },
        );}
    }
  }
      /* this.ApinewService.runKMeansEuclidean(selectedFile, {
        k: kValue,
        normMethod: normMethod
      })
      .then((response:any) => {
        console.log('API Response:', response);
        alert('API Response: ' + JSON.stringify(response));
      })
      .catch((error:any) => {
        console.error('API request failed:', error);
        alert('API Request Failed: ' + JSON.stringify(error));
      });
    }} else {
      // Handle the case where fileToUpload is null
      console.error('No file selected for clustering.');
      alert('No file selected for clustering.');
    }
  } */
  
  onClickHistory() {
    this.uploadedFiles = this.fileService.getFiles();
    this.berechnungOnOff = true;
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.fileService.addFile(file);  // Hier wird die Datei dem FileService hinzugefügt
      this.uploadedFilesData.push(file);
      this.uploadedFiles.push(file);
    }
      if (this.uploadedFiles.length > 1) {
        this.uploadedFiles.shift();
      }
      console.log(event.files);
    this.messageService.add({ severity: 'info', summary: 'Datei hochgeladen!' });
    this.berechnungOnOff = false;
    
  }
/*   onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFilesData.push(file);
      this.uploadedFiles.push(file);
    }
    if (this.uploadedFiles.length > 1) {
      this.uploadedFiles.shift();
    }
    console.log(event.files);
    this.messageService.add({ severity: 'info', summary: 'Datei hochgeladen!' });
    this.berechnungOnOff = false;
  } */

  calculateKMeans(data: number[][], k: number,options: any): any {
    
    try {
      // Erste Zeile löschen wegen Überschriften
      data.splice(0, 0)
      data.splice(0, 1)

      const result = this.localCalculationService.kmeans(data, k);
      alert('Zentroiden: ' + result.centroids);
      alert('Cluster: ' + result.clusters);
   
    } catch (error) {
      alert("Es gab einen Error im calculateKMeans")
    }
    
    
  }

}
