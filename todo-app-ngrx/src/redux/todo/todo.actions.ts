import { Action } from '@ngrx/store';

export const ADD_TODO = '[Todo] add';
export const DELETE_TODO = '[Todo] delete';
export const TOGGLE_TODO = '[Todo] toggle';
export const UPDATE_TODO = '[Todo] update';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;
  public id: number;

  constructor(
    public text: string
  ) {
    this.id = Math.random();
  }
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(
    public id: number
  ) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(
    public id: number
  ) {}
}

export class UpdateTodoAction implements Action {
  readonly type = UPDATE_TODO;

  constructor(
    public id: number,
    public newText: string
  ) {}
}


export type TodoActionType = 
AddTodoAction | 
DeleteTodoAction |
ToggleTodoAction |
UpdateTodoAction;
