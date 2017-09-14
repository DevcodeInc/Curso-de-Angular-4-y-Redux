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
    default:{
      return state;
    }
  }
}
