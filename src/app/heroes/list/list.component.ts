import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] =['spiderman','hulk','superman','batman'];
  public deleteHero?: string;


  removeLastHeroe():void{
    this.deleteHero = this.heroNames.pop();
    console.log(this.deleteHero);
  }

}
