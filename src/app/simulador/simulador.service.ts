import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, retry, Subject } from 'rxjs';
import { CalculoInteres } from './models/calculo.model';
import { calcular } from './simulador.actions';
import { AppState } from '../app.reducer';

@Injectable({
  providedIn: 'root'
})
export class SimuladorService {

  // private intereEA: Subject<number>;
  // private anualidad: Subject<number>;
  constructor(private store: Store<AppState>) { 
    // this.intereEA = new Subject();
    // this.anualidad = new Subject();
  }
  // Calculo interes Efectivo Anual
  interesEA(porcentajeInteres: number): number{
    return Math.pow(1 + porcentajeInteres, 1 / 12) - 1;
  }
  // Calculo interes Efectivo Anual
  // interesesEA(porcentajeInteres: number): Observable<number>{
  //   let interes = Math.pow(1 + porcentajeInteres, 1 / 12) - 1;
  //   this.intereEA.next(interes);
  //   return this.intereEA;
  // }
  // Calculo Anualidad
  Anualidad(tasaInteres:number, plazo: number, capital:number): number{
      let nAnualidad = (1 - (Math.pow(1 + tasaInteres, - plazo))) / tasaInteres;
      nAnualidad = capital / nAnualidad;
      return nAnualidad;
  }
  // Calculo Anualidad
  // Anualidad(tasaInteres:number, plazo: number, capital:number): Observable<number> {
  //   let nAnualidad = (1 - (Math.pow(1 + tasaInteres, - plazo))) / capital;
  //   this.anualidad.next(capital / nAnualidad);
  //   return this.anualidad;
  // }
  obtenerArreglo(
    plazo: number, 
    capital: number ,
    tasaMensual: number, 
    anualidad: number
  ){
    let object;
    for (let mes = 1; mes <= plazo; mes++) {
      let intereses = capital * tasaMensual;
      let amortizacion = anualidad - intereses;
      let saldo = capital - amortizacion;
      object = {
        capital: capital,
        intereses: intereses,
        amortizacion: amortizacion,
        cuota: anualidad,
        saldo: saldo,
        mes: mes
      }
      this.store.dispatch(calcular(object));
      capital = saldo
      // console.log(saldo);
    }
  }
}
