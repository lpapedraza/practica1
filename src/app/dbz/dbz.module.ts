import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista/lista.component';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListaComponent,
    AddPersonajeComponent,
    MainPageComponent
  ],
  exports:[MainPageComponent],
  imports: [
    CommonModule, FormsModule
  ]
})
export class DBZModule { }
