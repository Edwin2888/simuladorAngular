import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Plazo, CalculoForm } from '../interfaces/simulador';
import { SimuladorService } from '../simulador.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/simulador/store/app.reducer';
import { cleanCalculo } from '../store/actions/simulador.actions';
import { calcularSimulacion } from '../store/actions/filtro.actions';

@Component({
  selector: 'app-simulador-busqueda',
  templateUrl: './simulador-busqueda.component.html',
  styleUrls: ['./simulador-busqueda.component.css']
})
export class SimuladorBusquedaComponent implements OnInit {


  calculaForm: FormGroup = this.fb.group({
    capital: ['',Validators.required],
    plazo: [,Validators.required],
    intereses: ['',[Validators.required,Validators.min(10)]],
  });;

  filterCalculo!: CalculoForm;

  interesEA: number = 0;
  anualidad: number = 0;

  plazos: Plazo[] = [
    {value: 36, viewValue: '36 Meses'},
    {value: 24, viewValue: '24 Meses'},
    {value: 18, viewValue: '18 Meses'},
    {value: 12, viewValue: '12 Meses'},
    {value: 6, viewValue: '6 Meses'},
    {value: 3, viewValue: '3 Meses'},
    {value: 2, viewValue: '2 Meses'},
  ];

  constructor(
    private fb: FormBuilder, 
    private serviceSimulador: SimuladorService,
    private store: Store<AppState>
  ){}

  ngOnInit(): void {
    this.store.select('filtro').subscribe(({capital, plazo, intereses}) => {
      this.calculaForm = this.fb.group({
        capital: [capital,Validators.required],
        plazo: [plazo,Validators.required],
        intereses: [intereses,[Validators.required,Validators.min(10)]],
      });
    })
  }

  calcularCredito(){
    // this.serviceSimulador.calculaCredito(this.calculaForm.value)
    //   .subscribe(data => console.log(data));
    this.store.dispatch(calcularSimulacion({parameters: this.calculaForm.value}))
    // this.store.dispatch(cleanCalculo());
    // this.filterCalculo = this.calculaForm.value;
    // // Calculamos la tasa de interes Efectiva Anual
    // this.interesEA = this.serviceSimulador.interesEA(this.filterCalculo.intereses / 100);
    // console.log('Tasa Mensual: '+this.interesEA);
    // // Se calcula la anualidad
    // this.anualidad = this.serviceSimulador.Anualidad(this.interesEA,this.filterCalculo.plazo,this.filterCalculo.capital);
    // console.log('Anualidad: '+this.anualidad);
    // // S consume servicio para guardar en el state
    // this.serviceSimulador.obtenerArreglo(
    //   this.filterCalculo.plazo,
    //   this.filterCalculo.capital,
    //   this.interesEA,
    //   this.anualidad
    // );
  }

}
