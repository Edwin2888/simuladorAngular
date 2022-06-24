import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorResultadoComponent } from './simulador-resultado.component';

describe('SimuladorResultadoComponent', () => {
  let component: SimuladorResultadoComponent;
  let fixture: ComponentFixture<SimuladorResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimuladorResultadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimuladorResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
