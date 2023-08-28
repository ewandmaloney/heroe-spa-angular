import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService, Heroe } from './../../servicios/heroes.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private activRoute: ActivatedRoute, private heroeService: HeroeService, private location: Location, private router: Router) {

    this.activRoute.params.subscribe(params => {
      this.heroe = this.heroeService.getHeroe(params['id']);
    })

  }

  public volver() {
    this.location.back();
  }

}
