import { createStore } from 'redux';
import todoApp from './reducers';
import { addTodo, setVisibilityFilter, VisibilityFilters } from './actions'

let store = createStore(todoApp);

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
console.log(store.getState())
)

// Enviamos algunas acciones
store.dispatch(addTodo('Aprender sobre acciones'));
store.dispatch(addTodo('Aprender sobre reductores'));
store.dispatch(addTodo('Aprender sobre stores'));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// Anulamos el monitoreo de las actualizaciones al estado
unsubscribe()