import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simuladorApp';
  
  calcularCredito(){
    // console.log(!this.calculaForm.get('capital')?.errors)
    // console.log(this.calculaForm.valid)
    // console.log(this.calculaForm.value);

    // let nPorcentajeInteres = this.calculaForm.value.tasaInteres / 100;
    // var nPlazo = this.calculaForm.value.plazo;
    // var nCapital = this.calculaForm.value.capital;
    // let nTasaMensual:number = this.InteresEA(nPorcentajeInteres);
    // let nAnualidad = this.Anualidad(nTasaMensual, nPlazo, nCapital);
    // for (var i = 1; i <= nPlazo; i++) {
    //   let nIntereses = nCapital * nTasaMensual;
    //   let nAmortizacion = nAnualidad - nIntereses;
    //   let nSaldo = nCapital - nAmortizacion;
    //   this.dataSource.push({
    //     position: i,
    //     capital: nCapital,
    //     interes: nIntereses,
    //     amortizacion: nAmortizacion,
    //     cuota: nAnualidad,
    //     saldo: nSaldo
    //   })
    // }
    
  }
  InteresEA(nPorcentajeInteres: number): number{
    let nTasaMensual:number = Math.pow(1 + nPorcentajeInteres, 1 / 12) - 1;
    return nTasaMensual;
  }
  Anualidad(nTasa:number, nPlazo:number, nCapital:number):number {
    let nAnualidad = (1 - (Math.pow(1 + nTasa, - nPlazo))) / nTasa;
    nAnualidad = nCapital / nAnualidad;
    return nAnualidad;
  }
}
