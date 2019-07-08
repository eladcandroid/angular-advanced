// export type State = number;

export const initialState = 0;

import { CounterActions, CounterActionTypes } from './counter.actions';

export function reducer(state = initialState, action: CounterActions): number {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return state + 1;

    case CounterActionTypes.Decrement:
      return state - 1;

    case CounterActionTypes.Reset:
      return 0;

    default:
      return state;
  }
}
