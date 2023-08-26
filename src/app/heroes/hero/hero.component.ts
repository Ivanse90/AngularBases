import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age : number = 33;

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  public getHeroDescription():string{
    return `${this.name } - ${this.age }`;
  }

  changeHero():void{
    this.name = 'SuperIvan'
  }
  changeAge():void{
    this.age = 19
  }

  resetForm():void{
    this.age = 33;
    this.name = 'Ironman';
  }

}
