import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimuladorPageComponent } from './simulador-page/simulador-page.component';
import { SimuladorBusquedaComponent } from './simulador-busqueda/simulador-busqueda.component';
import { SimuladorResultadoComponent } from './simulador-resultado/simulador-resultado.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SimuladorPageComponent,
    SimuladorBusquedaComponent,
    SimuladorResultadoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    SimuladorPageComponent
  ]
})
export class SimuladorModule { }
