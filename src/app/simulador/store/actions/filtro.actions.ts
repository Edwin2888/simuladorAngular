import { createAction, props } from '@ngrx/store';
import { CalculoForm } from '../../interfaces/simulador';


export const calcularSimulacion = createAction(
    '[SIMULADOR - FILTRO] Calcular Simulacion',
    props<{parameters: CalculoForm}>()
);