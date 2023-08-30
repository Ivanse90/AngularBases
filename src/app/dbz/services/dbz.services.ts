import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4  as uuid } from 'uuid';




@Injectable({
  providedIn: 'root'
})
export class DbzServices {

  public characters: Character[] = [{
    name:'Krilling',
    power:1000,
    id: uuid()
  },
  {
    name:'Goku',
    power:9500,
    id: uuid()
  },{
    name:'Vegueta',
    power: 7500,
    id: uuid()
  }];


  addNewCharacter( character:Character):void{
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id:string):void{
    this.characters = this.characters.filter( character => character.id !== id);
  }
}
