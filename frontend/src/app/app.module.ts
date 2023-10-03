import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ToolbarModule } from 'primeng/toolbar';
import { HeaderComponent } from './header/header.component';
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

import { ManhattanDistanceComponent } from './manhattan-distance/manhattan-distance.component';
import { EuclidianDistanceComponent } from './euclidian-distance/euclidian-distance.component';


import { ManhattanDistanceComponent } from './manhattan-distance/manhattan-distance.component';
import { EuclidianDistanceComponent } from './euclidian-distance/euclidian-distance.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoPanelComponent,
    ChartsComponent,
    ManhattanDistanceComponent,
    EuclidianDistanceComponent
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
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
