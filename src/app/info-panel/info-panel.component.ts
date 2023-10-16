import { Component, EventEmitter, OnInit, Output, numberAttribute } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ApinewService } from "./apinew.service";
import { FileService } from './file.service';
import { LocalcalculationService } from './localcalculation.service';
import { KMeansService } from './kmeans.service';


interface Normalisierung {
  name: string;
  code: number;
}

interface Distanz {
  name: string;
  code: number;
}

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css'],
  providers: [MessageService, FileService, ApinewService, LocalcalculationService]
})

export class InfoPanelComponent implements OnInit {
  // Initialisierung von Variablen
  useLocalCalculation: boolean = false;
  csvDeciSepHTML: boolean = false;
  fileToUpload: File | null = null;
  uploadedFilesData: any[] = [];
  uploadedFiles: any[] = [];
  selectedFileIndex: number = -1;

  normalisierung: Normalisierung[] | undefined;
  selectedNorm: Normalisierung | undefined;
  distanz: Distanz[] | undefined;
  selectedDistanz: Distanz | undefined;
  berechnungOnOff: boolean | undefined;

  @Output() apiResponse: EventEmitter<any> = new EventEmitter<any>
  @Output() localResponse: EventEmitter<any> = new EventEmitter<any>

  kvalue: number | undefined;
  checked: boolean = false;

  constructor(
    private messageService: MessageService,
    private ApinewService: ApinewService,
    private fileService: FileService,
    private localCalculationService: LocalcalculationService,
    private kmeansService: KMeansService
  ) { }

  ngOnInit(): void {

    this.distanz = [
      { name: 'Manhattan Distanz', code: 1 },
      { name: 'Euklidische Distanz', code: 2 }
    ];

    this.normalisierung = [
      { name: 'Min/Max Normalisierung', code: 1 },
      { name: 'Z-Normalisierung', code: 2 },
    ];
    this.berechnungOnOff = true;

  }
  // Funktion, die aufgerufen wird, wenn eine Datei ausgewählt wird
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  setSelectedFile(index: number) {
    this.selectedFileIndex = index;
  }

  // Methode, um ein File auszuwählen
  selectFile(index: number) {
    if (this.selectedFileIndex === index) {
      // Wenn die Datei bereits ausgewählt ist, tue nichts
      return;
    }
    // Setze die ausgewählte Datei auf die aktuelle Indexposition
    this.setSelectedFile(index);
  }

  // Funktion, die beim Klick auf den "Berechnung starten" Button aufgerufen wird
  onClickPush() {

    const useLocalCalculation = this.useLocalCalculation;
    const selectedFile = this.fileService.getMarkedFile(this.selectedFileIndex);
    const kValue = this.kvalue; // If kvalue is undefined, use default value
    let csvDecimalSeperator = "EU";
    let normMethod = 1;


    if (selectedFile) {
      if (this.selectedNorm != undefined) {
        normMethod = this.selectedNorm.code;
      }
      if (this.csvDeciSepHTML) {
        csvDecimalSeperator = "US";
      }
      if (useLocalCalculation) {
        const options = {
          maxIterations: 100,
        };
        this.fileService.readFileData(selectedFile).then((data: number[][]) => {
          // Lokale KMeans Berechnung durchführen
          let response: any;
          let secDistanz: number;
          response = this.calculateKMeans(selectedFile, this.kvalue || 5, 100, this.selectedDistanz?.code);
          response.then((response: any) => {
            console.log("Response: ", response)
            this.apiResponse.emit(response)
          })
        });


      }

      else {
        if (this.selectedDistanz?.code == 1) {
          this.ApinewService.runKMeansManhattan(selectedFile, {
            k: kValue,
            normMethod: normMethod,
            csvDecimalSeparator: csvDecimalSeperator,
          })
            .subscribe(
              (response: any) => {
                console.log('API Response: for manhattan', response);
                this.apiResponse.emit(response.body)
              },
              (error: any) => {
                console.log('API Error:', error);
                alert('API Error: ' + JSON.stringify(error));
              },
            )
        } else if (this.selectedDistanz?.code == 2) {
          this.ApinewService.runKMeansEuclidean(selectedFile, {
            k: kValue,
            normMethod: normMethod,
            csvDecimalSeparator: csvDecimalSeperator,
          })
            .subscribe(
              (response: any) => {
                console.log('API Response: euclidean', response);
                this.apiResponse.emit(response.body)
              },
              (error: any) => {
                console.log('API Error:', error);
                alert('API Error: ' + JSON.stringify(error));
              },

            );
        }
      }
    }
  }

  // Funktion, um die Upload-Historie zu löschen
  onClickHistory() {
    this.fileService.deleteAllFiles;
    this.uploadedFilesData = [];
    this.berechnungOnOff = true;
    this.selectedFileIndex = -1;
  }

  // Funktion, die beim Upload einer Datei aufgerufen wird
  onUpload(event: any) {
    for (let file of event.files) {
      this.fileService.addFile(file);  // Hier wird die Datei dem FileService hinzugefügt
      this.uploadedFilesData.unshift(file);
      this.uploadedFiles.push(file);
      this.setSelectedFile(0);
    }
    if (this.uploadedFiles.length > 1) {
      this.uploadedFiles.shift();
    }
    console.log(event.files);
    this.messageService.add({ severity: 'info', summary: 'Datei hochgeladen!' });
    this.berechnungOnOff = false;

  }

  // Funktion, um K-Means mit den angegebenen Parametern auszuführen
  calculateKMeans(data: File, k: number, options: any, distanz: number | undefined): any {

    try {
      if (distanz == 1) {
        const result = this.kmeansService.performKMeans(data, k, false, 'MANHATTEN');
        console.log("Result: " + result)
        return result;
      } else if (distanz == 2) {
        const result = this.kmeansService.performKMeans(data, k, false, 'EUCLIDEAN');
        console.log("Result: " + result)
        return result;
      }
    } catch (error) {
      alert("Es gab einen Error im calculateKMeans")
    }


  }

}