import { createSelector } from '@ngrx/store';
import { AppState } from './../app.reducer';

export const getTodos = (state: AppState) => state.todos;

export const getCountItemLeft = createSelector(getTodos, todos => {
  return todos.filter(todo => !todo.completed).length;
});