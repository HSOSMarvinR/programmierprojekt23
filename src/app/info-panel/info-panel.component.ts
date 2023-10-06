import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

import { HttpClient } from "@angular/common/http";  //Http Client für Api



// Interface für die Auswahlmöglichkeiten der Normalisierung.
interface Normalisierung {
  name: string;
  code: string;
}

// File wird initial auf null gesetzt.
let file = null;

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css'],
  providers: [MessageService]
})


export class InfoPanelComponent {

  constructor(private messageService: MessageService, private backend: HttpClient) { }

  // Array vom Type any wird initial erstellt, wo die hochgeladenen Files später reingeschrieben werden.
  uploadedFilesData: any[] = [];
  uploadedFiles: any[] = [];

  // Variabel, die von der Eingabe des K gefüllt wird.
  kvalue: number | undefined;

  // Methode des "Berechnung starten..." Buttons. Die Datei aus file wird an die API gesendet. Wenn für K etwas eingegeben wurde,
  // wird dies als Wert für die API genutzt. Wurde K freigelassen, wird standardmäßig 5 genutzt.
  onClickPush() {
    if (this.selectedNorm == undefined) {
      this.messageService.add({ severity: 'error', summary: 'Fehler', detail: 'Normalisierung auswählen!' });
    } else {
    if (this.kvalue) {
      file = this.backend.patch("https://programmierprojekt-ujgmkp4tpq-ez..run.qpp/kmeans/csv?k=X", this.kvalue);
    } else {
      this.kvalue = 5;
      file = this.backend.patch("https://programmierprojekt-ujgmkp4tpq-ez..run.qpp/kmeans/csv?k=X", 5);
    };
    alert("API Response: " + file);
    alert("Kvalue: " + this.kvalue)
    alert("Normalisierung: " + this.selectedNorm?.name);
    alert("Distanz: " + this.distanz);
  }
};

  onClickGet() {
    let output = this.backend.get("https://programmierprojekt-ujgmkp4tpq-ez..run.qpp/kmeans/csv?k=X");
    alert(output);
  }

  // Methode, die aufgerufen wird, wenn eine Datei hochgeladen wird. Jede hochgeladene Datei wird in das Array uploadedFiles gepusht.
  onUpload(event: any) {
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
  }

  onClickHistory() {
    this.uploadedFiles = [];
    this.berechnungOnOff = true;
  }

  // Objekte normalisierung und selectedNorm und distanz werden angelegt.
  normalisierung: Normalisierung[] | undefined;
  selectedNorm: Normalisierung | undefined;
  distanz: string = "man";
  berechnungOnOff: boolean | undefined;

  // Die Auswahlmöglichkeiten der Distanzmethode werden angelegt.
  selectedDistanz: any[] = [
    { label: 'Manhattan Distanz', value: 'man' },
    { label: 'Euklidische Distanz', value: 'euk' }
  ];

  // onInit = der Button zeigt initial die Manhattan Distanz als Auswahl an und setzt die FormControl deshalb auf den key "man".
  ngOnInit() {
    // normalisierung wird mit den Auswahlmöglichkeiten gefüllt.
    this.normalisierung = [
      { name: 'Min/Max Normalisierung', code: 'MinMax' },
      { name: 'Robust Scaler', code: 'Robust' },
      { name: 'Z-Normalisierung', code: 'znorm' },
    ]

    this.berechnungOnOff = true;
  }
}