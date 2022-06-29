import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CalculoInteres } from './models/calculo.model';
import { cleanCalculo } from './store/actions/simulador.actions';
import { AppState } from './store/app.reducer';
import { CalculoForm } from './interfaces/simulador';

@Injectable({
  providedIn: 'root'
})
export class SimuladorService {

  // private intereEA: Subject<number>;
  // private simulacion: Subject<CalculoInteres[]>;
  constructor(private store: Store<AppState>) { 
    // this.intereEA = new Subject();
    // this.simulacion = new Subject();
  }
  // calculaCredito(dataFiltro: CalculoForm): Observable<CalculoInteres[]>{
  //   // Calculamos el interes Efectivo Anual
  //   let nTasaInteres = this.interesEA(dataFiltro.intereses / 100);
  //   // Calculamos la anualidad
  //   let nAnualidad = (1 - (Math.pow(1 + nTasaInteres, - dataFiltro.plazo))) / nTasaInteres;
  //   nAnualidad = dataFiltro.capital / nAnualidad;
  //   let nCapital: number = dataFiltro.capital;
  //   // Armamos el arreglo con la simulacion
    
  //   for (let mes = 1; mes <= dataFiltro.plazo; mes++) {
  //     let nInteres = nCapital * nTasaInteres;
  //     let nAmortizacion = nAnualidad - nInteres;
  //     let nSaldo = nCapital - nAmortizacion;
  //     let item: CalculoInteres = {
  //       capital: nCapital,
  //       intereses: nInteres,
  //       amortizacion: nAmortizacion,
  //       cuota: nAnualidad,
  //       saldo: nSaldo,
  //       mes: mes
  //     }
  //     this.aTable.push(item);
  //     nCapital = nSaldo
  //   }
  //   this.simulacion.next(this.aTable);
  //   return this.simulacion;
  // }
  calculaCredito(dataFiltro: CalculoForm):CalculoInteres[] {
    this.store.dispatch(cleanCalculo());
    let aTable : CalculoInteres[] = [];
    // Calculamos el interes Efectivo Anual
    let nTasaInteres = this.interesEA(dataFiltro.intereses / 100);
    // Calculamos la anualidad
    let nAnualidad = (1 - (Math.pow(1 + nTasaInteres, - dataFiltro.plazo))) / nTasaInteres;
    nAnualidad = dataFiltro.capital / nAnualidad;
    let nCapital: number = dataFiltro.capital;
    // Armamos el arreglo con la simulacion
    for (let mes = 1; mes <= dataFiltro.plazo; mes++) {
      let nInteres = nCapital * nTasaInteres;
      let nAmortizacion = nAnualidad - nInteres;
      let nSaldo = nCapital - nAmortizacion;
      let item: CalculoInteres = {
        capital: nCapital,
        intereses: nInteres,
        amortizacion: nAmortizacion,
        cuota: nAnualidad,
        saldo: nSaldo,
        mes: mes
      }
      aTable.push(item);
      nCapital = nSaldo
    }
    return aTable;
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
  // Anualidad(tasaInteres:number, plazo: number, capital:number): number{
  //     let nAnualidad = (1 - (Math.pow(1 + tasaInteres, - plazo))) / tasaInteres;
  //     nAnualidad = capital / nAnualidad;
  //     return nAnualidad;
  // }
  // Calculo Anualidad
  // Anualidad(tasaInteres:number, plazo: number, capital:number): Observable<number> {
  //   let nAnualidad = (1 - (Math.pow(1 + tasaInteres, - plazo))) / capital;
  //   this.anualidad.next(capital / nAnualidad);
  //   return this.anualidad;
  // }
  // obtenerArreglo(
  //   plazo: number, 
  //   capital: number ,
  //   tasaMensual: number, 
  //   anualidad: number
  // ){
  //   let object;
  //   for (let mes = 1; mes <= plazo; mes++) {
  //     let intereses = capital * tasaMensual;
  //     let amortizacion = anualidad - intereses;
  //     let saldo = capital - amortizacion;
  //     object = {
  //       capital: capital,
  //       intereses: intereses,
  //       amortizacion: amortizacion,
  //       cuota: anualidad,
  //       saldo: saldo,
  //       mes: mes
  //     }
  //     this.store.dispatch(calcularAmortizacion(object));
  //     capital = saldo
  //     // console.log(saldo);
  //   }
  // }
}
