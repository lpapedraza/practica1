import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  @Input()
  listaPersonajes:Personaje[]=[
    {
      id:'',
      nombre:'Goku',
      poder:10000
    }
  ];

  @Output()
  eventSendId=new EventEmitter<string>()

  sendId(id?:string):void{
    this.eventSendId.emit(id)
  }

}
