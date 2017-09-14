import { createSelector } from '@ngrx/store';
import { AppState } from './../app.reducer';

export const getTodos = (state: AppState) => state.todos;
export const getState = (state: AppState) => state;

export const getCountItemLeft = createSelector(getTodos, todos => {
  return todos.filter(todo => !todo.completed).length;
});

export const getVisibleTodos = createSelector(getState, state => {
  switch (state.filter) {
    case 'SHOW_ALL': {
      return state.todos;
    }
    case 'SHOW_COMPLETED': {
      return state.todos.filter(t => t.completed);
    }
    case 'SHOW_ACTIVE': {
      return state.todos.filter(t => !t.completed);
    }
  }
});