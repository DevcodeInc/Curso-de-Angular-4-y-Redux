import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../../redux/app.reducer';
import { Todo } from './../../redux/todo/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private store: Store<AppState>
  ) {
  this.readStateTodos(); 
  }

  ngOnInit() {
  }

  private readStateTodos(){
    this.store.select('todos')
    .subscribe(todos => {
      this.todos = todos;
    });
  }

}
