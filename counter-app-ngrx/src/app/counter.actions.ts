import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] increment';
export const DECREMENT = '[Counter] decrement';
export const PLUS = '[Counter] plus';
export const RESET = '[Counter] reset';

export class IncrementAction implements Action{
  readonly type = INCREMENT;
}

export class DecrementAction implements Action{
  readonly type = DECREMENT;
}

export class PlusAction implements Action{
  readonly type = PLUS;

  constructor(
    public payload: number
  ){}
}

export class ResetAction implements Action{
  readonly type = RESET;
}

export type CounterTypeAction = 
  IncrementAction |
  DecrementAction |
  PlusAction | 
  ResetAction;