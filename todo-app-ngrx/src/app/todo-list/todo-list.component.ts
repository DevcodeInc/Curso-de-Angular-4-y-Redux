import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from './../../redux/app.reducer';
import { Todo } from './../../redux/todo/todo.model';
import * as FilterActions from './../../redux/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
    this.readStateTodos();
    this.route.params
    .subscribe(params => {
      this.setFilter(params.filter);
    }); 
  }

  ngOnInit() {
  }

  private readStateTodos(){
    this.store.select('todos')
    .subscribe(todos => {
      this.todos = todos;
    });
  }

  private setFilter(filter: string){
    switch (filter) {
      case 'active': {
        const action = new FilterActions.SetFilterAction('SHOW_ACTIVE');
        this.store.dispatch(action);
        break;
      }
      case 'completed': {
        const action = new FilterActions.SetFilterAction('SHOW_COMPLETED');
        this.store.dispatch(action);
        break;
      }
      default: {
        const action = new FilterActions.SetFilterAction('SHOW_ALL');
        this.store.dispatch(action);
        break;
      }

    }
  }

}
