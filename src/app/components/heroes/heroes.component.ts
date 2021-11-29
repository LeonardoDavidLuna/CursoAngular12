import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  
  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService, private route:Router ) {
    //console.log("Constructor");

  }

  ngOnInit(): void {
    
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe( idx:number ){
    console.log(idx);
    this.route.navigate( ['/heroe',idx] )
  }

}