import { createAction, props } from '@ngrx/store';


export const calcular = createAction(
    '[SIMULADOR] Calcular',
    props<{capital: number,intereses: number,amortizacion: number, cuota:number, saldo:number, mes:number}>()
);

export const cleanCalculo = createAction(
    '[SIMULADOR] Limpiar Calculo'
)