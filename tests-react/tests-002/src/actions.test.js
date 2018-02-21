import {increment, decrement, asyncInc} from './actions';

test('increment action test', () => {
  const expected = { type: 'INC' };
  expect(increment()).toEqual(expected);
});

test('decrement action test', () => {
  const expected = { type: 'DEC' };
  expect(decrement()).toEqual(expected);
});

test('async test', () => {
  const fakeDispatch = jest.fn();
  expect(typeof  asyncInc).toBe('function');
  return asyncInc()(fakeDispatch).then(() => {
    // console.log(fakeDispatch.mock.calls);
    expect(fakeDispatch).toHaveBeenCalledWith({ type: 'INC' });
  });
});