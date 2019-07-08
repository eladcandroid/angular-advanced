import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Increment, Decrement, Reset } from './counter.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../reducers/index';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <button (click)="increment()">Increment</button>

      <div>
        Current Count: {{ counter$ | async }}
        <button (click)="reset()">Reset Counter</button>
      </div>

      <button (click)="decrement()">Decrement</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  counter$: Observable<number>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.counter$ = this.store.select('counter');
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
