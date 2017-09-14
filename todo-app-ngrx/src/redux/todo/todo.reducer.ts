import { Todo } from './todo.model';
import { Action } from '@ngrx/store';

const initialState: Todo[] = [];

export function TodosReducer(state: Todo[] = initialState, action: Action): Todo[]{
  //switch
  return state;
}