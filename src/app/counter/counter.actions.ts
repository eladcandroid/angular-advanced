import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement',
  Reset = '[Counter] Reset'
}

export class Increment implements Action {
  public readonly type = CounterActionTypes.Increment;
}

export class Decrement implements Action {
  public readonly type = CounterActionTypes.Decrement;
}

export class Reset implements Action {
  public readonly type = CounterActionTypes.Reset;
  // constructor(public payload: { title: string }) {}
}


export type CounterActions =
  | Increment
  | Decrement
  | Reset;
