import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorBusquedaComponent } from './simulador-busqueda.component';

describe('SimuladorBusquedaComponent', () => {
  let component: SimuladorBusquedaComponent;
  let fixture: ComponentFixture<SimuladorBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimuladorBusquedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimuladorBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
