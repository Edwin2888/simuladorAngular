import { Action, createReducer, on, props } from '@ngrx/store';
import { calcularSimulacion } from "../actions/filtro.actions";
import { CalculoForm } from '../../interfaces/simulador';

export const initialState:CalculoForm = {
    capital: 0,
    plazo: 0,
    intereses: 0
};

export const filtroReducer = createReducer(
    initialState,
    on(calcularSimulacion, (state, {parameters}) => ({
            ...state,
            capital: parameters.capital,
            plazo: parameters.plazo,
            intereses: parameters.intereses
        })
    )
);