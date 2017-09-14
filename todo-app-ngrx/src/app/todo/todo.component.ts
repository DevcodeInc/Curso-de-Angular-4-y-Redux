import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Todo } from './../../redux/todo/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  checkField: FormControl;

  constructor() {
    this.checkField = new FormControl(false);
  }

  ngOnInit() {
    this.checkField.setValue(this.todo.completed);
  }

}
