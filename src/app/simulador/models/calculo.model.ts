export class CalculoInteres {
    capital: number;
    intereses: number;
    amortizacion: number;
    cuota: number;
    saldo: number;
    mes?: number;
    constructor(
        capital: number,
        intereses: number,
        amortizacion: number,
        cuota: number,
        saldo: number,
        mes?: number,
    ){
        this.capital = capital;
        this.intereses = intereses;
        this.amortizacion = amortizacion;
        this.cuota = cuota;
        this.saldo = saldo;
        this.mes = mes;
    }
}