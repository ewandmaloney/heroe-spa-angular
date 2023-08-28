import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaHeroeComponent } from './tarjeta-heroe.component';

describe('TarjetaHeroeComponent', () => {
  let component: TarjetaHeroeComponent;
  let fixture: ComponentFixture<TarjetaHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaHeroeComponent]
    });
    fixture = TestBed.createComponent(TarjetaHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
