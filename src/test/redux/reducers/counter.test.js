import userReducer from '../../../store/reducers/counter';
import { counterInitialState as initialState } from '../../../store/initialState';
import { add, subtract, increment, decrement } from '../../../store/actions/index';

describe('counter Reducers', () => {
  it('should return initialState when there is no action', () => {
    const res = userReducer(initialState, {});
    expect(res).toMatchObject(initialState);
  });
  it('should return an updated state of the increment counter', () => {
    const res = userReducer(initialState, increment());
    expect(res).toMatchObject({ counter: 1 });
  });
  it('should return an updated state of the increment counter', () => {
    const res = userReducer(initialState, decrement());
    expect(res).toMatchObject({ counter: -1 });
  });
  it('should return an updated state of the increment counter by add 5', () => {
    const res = userReducer(initialState, add(5));
    expect(res).toMatchObject({ counter: 5 });
  });
  it('should return an updated state of the increment counter by subtract 5', () => {
    const res = userReducer(initialState, subtract(5));
    expect(res).toMatchObject({ counter: -5 });
  });
});
