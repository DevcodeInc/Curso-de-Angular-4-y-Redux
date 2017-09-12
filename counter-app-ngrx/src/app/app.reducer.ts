import { ActionReducerMap } from '@ngrx/store';
import { CounterReducer } from './counter.reducer';

export interface AppState{
  counter: number;
}

export const rootReducer: ActionReducerMap<AppState> = {
  counter: CounterReducer
}