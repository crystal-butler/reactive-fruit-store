// src/app/store/effects.ts

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { ArtsService } from '../arts.service';

@Injectable()
export class ShopEffects {
    constructor(
        private actions$: Actions,
        private artsService: ArtsService
    ) {}

    @Effect()
    loadArts$ = this.actions$.pipe(
        ofType(ActionTypes.LoadItems),
        mergeMap(() =>
            this.artsService.getAll().pipe(
                map(arts => {
                    return { type: ActionTypes.LoadSuccess, payload: arts };
                }),
                catchError(() => EMPTY)
            )
        )
    );
}