import { Component, OnInit } from '@angular/core';
import { HEROES } from './fixture-heros';
import { Hero } from './Hero';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
 
  heros= HEROES;
  selectedHero: Hero;
  constructor() { }

  ngOnInit() {
  }

  selectHeroAction(hero: Hero): void{
    this.selectedHero=hero
  }
}
