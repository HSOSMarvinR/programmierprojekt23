import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";  //Client Module für Http Service Api



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ChartsComponent } from './charts/charts.component';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

import { SelectButtonModule } from 'primeng/selectbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';


import { FileService } from './info-panel/file.service';


@NgModule({
  declarations: [
    AppComponent,
    InfoPanelComponent,
    ChartsComponent,

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    SplitButtonModule,
    CardModule,
    ChartModule,
    FileUploadModule,
    MessagesModule,
    ToolbarModule,
    ToastModule,
    SelectButtonModule,
    InputSwitchModule,
    DropdownModule,
    ImageModule,
    HttpClientModule,
    InputNumberModule,
    CheckboxModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
