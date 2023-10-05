import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";  //Http Client für Api





interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

interface Normalisierung {
  name: string;
  code: string;
}

let file = null;

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css'],
  providers: [MessageService]
})


export class InfoPanelComponent {
  
  uploadedFiles: any[] = [];
  constructor(private messageService: MessageService, private backend: HttpClient) { }

  onClickPush(){
    
    file = this.backend.patch("https://programmierprojekt-ujgmkp4tpq-ez..run.qpp/kmeans/csv?k=X", 5);
    alert(file);
  }

  onClickGet(){
    
    let output = this.backend.get("https://programmierprojekt-ujgmkp4tpq-ez..run.qpp/kmeans/csv?k=X");
    
    alert(output);
  }

  onUpload(event:any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    console.log(event.files);
    this.messageService.add({ severity: 'info', summary: 'File Uploaded'});
  }


  normalisierung: Normalisierung[] | undefined;
  selectedNorm: Normalisierung | undefined;

  formGroup!: FormGroup;

  stateOptions: any[] = [
    { label: 'Manhattan Distanz', value: 'man' },
    { label: 'Euklidische Distanz', value: 'euk' }
  ];

  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl('man')
    });
    this.normalisierung = [
      { name: 'Min/Max Normalisierung', code: 'MinMax' },
      { name: 'Robust Scaler', code: 'Robust' },
      { name: 'Z-Normalisierung', code: 'znorm' },
    ]
  }
}
