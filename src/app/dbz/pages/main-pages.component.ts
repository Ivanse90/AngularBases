import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzServices:DbzServices){}

  get character(): Character[]{
    return [...this.dbzServices.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzServices.deleteCharacterById(id);
  }

  onNewCharacter(character:Character){
    this.dbzServices.addNewCharacter(character);
  }
}
