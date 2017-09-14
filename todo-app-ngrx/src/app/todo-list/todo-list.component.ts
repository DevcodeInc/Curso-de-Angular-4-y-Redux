import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../../redux/app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('todos')
    .subscribe(todos => {
      console.log(todos);
    });
  }

  ngOnInit() {
  }

}
