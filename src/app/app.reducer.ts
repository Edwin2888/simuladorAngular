import { ActionReducerMap } from '@ngrx/store';
import { CalculoInteres } from './simulador/models/calculo.model';
import { simuladorReducer } from './simulador/simulador.reducer';
export interface AppState {
    calculo: CalculoInteres[]
}

export const appReducers: ActionReducerMap<AppState> = {
    calculo: simuladorReducer
}