import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, of, tap } from "rxjs";
import * as ActionsFiltro from '../actions/filtro.actions';
import * as ActionsSimulador from '../actions/simulador.actions';
import { SimuladorService } from '../../simulador.service';

@Injectable()
export class SimuladorEffects {
    constructor(
        private actions$: Actions,
        private serviceSimulador: SimuladorService
    ){}
    calcular$ = createEffect(
        () => this.actions$.pipe(
            ofType(ActionsFiltro.calcularSimulacion),
            // tap(data => console.log('Effect tap '+ JSON.stringify(data))),
            mergeMap(
                ({parameters}) => of(this.serviceSimulador.calculaCredito(parameters))
                    .pipe(
                        map( data => ActionsSimulador.calcularAmortizacion({simulacion: data})),
                        // map( data => ActionsSimulador.cleanCalculo()),
                        // tap( data => console.log(JSON.stringify(data)))
                    )
            )
        )
    )
}