import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { God } from '../god';
import { GodService } from '../god.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  gods: God[] = [];

  constructor(
    private heroService: HeroService,
    private godService: GodService
  ) { }

  ngOnInit() {
    this.getHeroes();
    this.getGods();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getGods(): void {
    this.godService.getGods()
      .subscribe(gods => this.gods = gods.slice(1, 5));
  }
}