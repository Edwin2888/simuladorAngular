import { Action, createReducer, on, props } from '@ngrx/store';
import { calcularAmortizacion, cleanCalculo } from "../actions/simulador.actions";
import { CalculoInteres } from '../../models/calculo.model';


// export const initialState:CalculoForm = {
//     capital: 0,
//     plazo: 12,
//     interes: 27
// };

export const initialState:CalculoInteres[] = [];

export const simuladorReducer = createReducer(
    initialState,
    on(calcularAmortizacion, (state,{simulacion}) => {
        return [...state.concat(simulacion)];
    }),
    on(cleanCalculo, (state) => [])
);