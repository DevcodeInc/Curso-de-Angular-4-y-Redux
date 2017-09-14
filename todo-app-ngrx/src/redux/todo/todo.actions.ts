import { Action } from '@ngrx/store';
import { Todo } from './todo.model';

export const ADD_TODO = '[Todo] add';


export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  public id: number;

  constructor(
    public text: string
  ) {
    this.id = Math.random();
  }
}

export type TodoActionType = AddTodoAction;