// Importiert Module aus dem Angular-Paket
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Definition der Routen
const routes: Routes = [];

@NgModule({
  // Fügt die definierten Routen in die Anwendung ein
  imports: [RouterModule.forRoot(routes)],
  // Macht das RouterModule und die definierten Routen in der Anwendung verfügbar
  exports: [RouterModule]
})
export class AppRoutingModule { }
