import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from './../../servicios/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  heroes: any[] = [];
  termino: any;

  constructor(private HeroService: HeroeService, private activRoute: ActivatedRoute, private route: Router) {



  }

  ngOnInit(): void {

    this.activRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this.HeroService.buscarHeroes(params['termino']);
    })

  }

  public verHeroe(idx: number) {
    this.route.navigate(['/heroe', idx]);
  }

}
