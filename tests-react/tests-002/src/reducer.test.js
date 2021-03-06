import reducer from "./reducer";
import {decrement, increment} from "./actions";

describe('reducer test', () => {
  const initialState = 10;
  
  test('inc action test', () => {
    const dispatchInc = reducer(initialState, increment());
    expect(dispatchInc).toBe(initialState + 1);
  });
  
  test('dec action test', () => {
    const dispatchInc = reducer(initialState, decrement());
    expect(dispatchInc).toBe(initialState - 1);
  });
  
  test('missprint action type', () => {
    const dispatchUnknown = reducer(initialState, {type: 'UNKNOWN'});
    expect(dispatchUnknown).toBe(initialState);
  });
});