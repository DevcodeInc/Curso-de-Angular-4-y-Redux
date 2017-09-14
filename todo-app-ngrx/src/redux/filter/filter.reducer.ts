import * as FilterAction from './filter.actions';

export function FilterReducer(state: string = 'SHOW_ALL', action: FilterAction.SetFilterAction): string{
  switch (action.type) {
    case FilterAction.SET_FILTER: {
      return action.filter;
    }
    default: {
      return state;
    }
  }
}