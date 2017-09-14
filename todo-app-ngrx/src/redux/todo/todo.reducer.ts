import { Todo } from './todo.model';
import * as TodoActions from './todo.actions';

const initialState: Todo[] = [];

export function TodoReducer(state: Todo[] = initialState, action: TodoActions.TodoActionType): Todo[]{
  
  switch (action.type) {
    case TodoActions.ADD_TODO: {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    }
    case TodoActions.DELETE_TODO: {
     return state.filter(todo => action.id !== todo.id);
    }
    case TodoActions.TOGGLE_TODO: {
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
    }
    case TodoActions.UPDATE_TODO: {
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            text: action.newText
          };
        } else {
          return todo;
        }
      });
    }
    default:{
      return state;
    }
  }
}
