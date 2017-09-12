import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.reducer';
import * as CounterActions from './../counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: number;

  constructor(
    private store: Store<AppState>
  ) {
    this.readCounterState();
  }

  ngOnInit() {
  }

  plus(){
    this.store.dispatch(new CounterActions.PlusAction(10));
  }

  reset(){
    this.store.dispatch(new CounterActions.ResetAction());
  }

  private readCounterState(){
    this.store.select('counter')
    .subscribe(counter =>{
      this.counter = counter;
    });
  }

}
