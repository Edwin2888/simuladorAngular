import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CalculoInteres } from '../models/calculo.model';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-simulador-resultado',
  templateUrl: './simulador-resultado.component.html',
  styleUrls: ['./simulador-resultado.component.css']
})
export class SimuladorResultadoComponent implements OnInit {
  dataSource:CalculoInteres[] = [];
  displayedColumns: string[] = ['mes','capital','intereses','amortizacion','cuota','saldo'];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(({calculo}) => this.dataSource = calculo)
    // this.store.dispatch(getCalculo());
  }

}
