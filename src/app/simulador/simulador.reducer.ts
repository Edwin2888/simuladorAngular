import { Action, createReducer, on, props } from '@ngrx/store';
import { calcular, cleanCalculo } from "./simulador.actions";
import { CalculoInteres } from './models/calculo.model';


// export const initialState:CalculoForm = {
//     capital: 0,
//     plazo: 12,
//     interes: 27
// };

export const initialState:CalculoInteres[] = [];

export const simuladorReducer = createReducer(
    initialState,
    on(calcular, (state,{capital,intereses,cuota,amortizacion,mes,saldo}) => {
        console.log(new CalculoInteres(capital,intereses,amortizacion,cuota,saldo,mes));
        return [...state,new CalculoInteres(capital,intereses,amortizacion,cuota,saldo,mes)]
    }),
    on(cleanCalculo, (state) => [])
);