import { Injectable } from '@angular/core';
import { Personaje } from './dbz/interfaces/personaje';
import {v4 as id} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

listaPersonajes:Personaje[]=[
  {
    id:id(),
    nombre:'Goku',
    poder:10000
  },
  {
    id:id(),
    nombre:'Trunks',
    poder:7000
  },
  {
    id:id(),
    nombre:'Vegeta',
    poder:7000
  },
  {
    id:id(),
    nombre:'Krillin',
    poder:6000
  }
];

//metodo para agregar personaje
addPersonaje(personaje:Personaje):void{
  const nuevoPersonaje={...personaje, id:id()}
  this.listaPersonajes.push(nuevoPersonaje)
}

//metodo que elimina un personaje por Id

deletById(id:string):void{
  this.listaPersonajes=this.listaPersonajes.filter(personaje=>personaje.id!=id)
}
}
