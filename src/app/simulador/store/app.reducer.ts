import { ActionReducerMap } from '@ngrx/store';
import { CalculoInteres } from '../models/calculo.model';
import { filtroReducer } from './reducers/filtro.reducer';
import { simuladorReducer } from './reducers/simulador.reducer';
import { CalculoForm } from '../interfaces/simulador';
export interface AppState {
    calculo: CalculoInteres[],
    filtro: CalculoForm
}

export const appReducers: ActionReducerMap<AppState> = {
    calculo: simuladorReducer,
    filtro: filtroReducer
}