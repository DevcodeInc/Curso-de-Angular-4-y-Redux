import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import * as CounterActions from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  counter: number;

  constructor(
    private store: Store<AppState>
  ){
    this.readCounterState();
  }

  increment(){
    this.store.dispatch(new CounterActions.IncrementAction());
  }

  decrement(){
    this.store.dispatch(new CounterActions.DecrementAction());
  }

  private readCounterState(){
    this.store.select('counter')
    .subscribe(counter =>{
      this.counter = counter;
    });
  }
}
