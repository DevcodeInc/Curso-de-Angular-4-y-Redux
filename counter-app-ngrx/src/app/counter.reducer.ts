import * as CounterActions from './counter.actions';

export function CounterReducer(state: number = 0, action: CounterActions.CounterTypeAction){
  if(action === null) return state;
  switch(action.type){
    case CounterActions.INCREMENT:
      return state + 1;
    case CounterActions.DECREMENT:
      return state - 1;
    case CounterActions.PLUS:
      return state + action.payload;
    case CounterActions.RESET:
      return 0;
    default:
      return state;
  }
}