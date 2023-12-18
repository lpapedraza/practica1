import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent {

  personaje:Personaje={
    id:'',
    nombre:'',
    poder:0
  }

  @Output()
  eventSendPersonaje=new EventEmitter<Personaje>()

  sendPersonaje():void{
    if(this.personaje.nombre.length===0)return;

    this.eventSendPersonaje.emit(this.personaje);
   

    this.personaje={
      id:'',
      nombre:'',
      poder:0
    }
  }

}
