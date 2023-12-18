import { Component } from '@angular/core';
import { DbzService } from 'src/app/dbz.service';
import { Personaje } from '../../interfaces/personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(private dbzService:DbzService){}

  //obtner lista de personajes
  getListaPersonajes():Personaje[]{
    return [...this.dbzService.listaPersonajes]

  }

  //llamado de servicio de crear personaje

  addPersonaje(personaje:Personaje):void{
    this.dbzService.addPersonaje(personaje);


  }

  //llamdo a servicio que elimina un personaje

  deleteById(id:string):void{
    this.dbzService.deletById(id)
  }

}
