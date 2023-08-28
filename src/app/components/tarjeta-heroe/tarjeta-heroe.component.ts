import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-heroe',
  templateUrl: './tarjeta-heroe.component.html',
  styleUrls: ['./tarjeta-heroe.component.css']
})
export class TarjetaHeroeComponent {

  @Input() heroe: any = {}
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private route: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  public verHeroe() {
    //this.heroeSeleccionado.emit(this.index)
    this.route.navigate(['/heroe', this.index])
  }

}
