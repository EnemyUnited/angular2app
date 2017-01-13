/*
 * This component manages the roster of Justice League super heroes.
 */

import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.model';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'hero-roster',
  templateUrl: 'app/heroes/hero-roster.template.html',
  providers: [ HeroesService ]
})

export class HeroRosterComponent implements OnInit {
  heroes: Hero[];
  errorMessage: string;

  constructor (private heroesService: HeroesService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes()
                      .subscribe(
                        heroes => this.heroes = heroes,
                        error  => this.errorMessage = <any>error);
  }
}
