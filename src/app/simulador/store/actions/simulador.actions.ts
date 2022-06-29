import { createAction, props } from '@ngrx/store';
import { CalculoInteres } from '../../models/calculo.model';


export const calcularAmortizacion = createAction(
    '[SIMULADOR] Pintar solucion',
    props<{simulacion: CalculoInteres[]}>()
);

export const cleanCalculo = createAction(
    '[SIMULADOR] Limpiar Calculo'
)