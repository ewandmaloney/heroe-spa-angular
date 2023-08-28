import { HeroeService, Heroe } from './../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroeService, private route: Router) {



  }
  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  public verHeroe(idx: number) {
    this.route.navigate(['/heroe', idx]);
  }

  
}
