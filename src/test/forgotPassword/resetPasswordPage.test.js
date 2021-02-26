import React from 'react';
import { jest } from '@jest/globals';
import axios from 'axios';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { render, fireEvent, act } from '@testing-library/react';
import rootReducer from '../../store';
import '@testing-library/jest-dom/extend-expect';

import ResetPassword from '../../components/ResetPassword/ResetPassword';

jest.mock('axios');

// Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store1 = mockStore({});

let mainState; let props; let testStore; let
  setUp;
beforeEach(() => {
  const middlewares = [thunk];
  mainState = {
    email: '',
    token: null,
    error: null,
    loading: false,
    message: null,
  };

  props = {
    email: '',
    token: null,
    error: null,
    loading: false,
    message: null,
    resetPassword: jest.fn(),
  };

  testStore = (state) => {
    const createStoreWithMiddleware = () => { applyMiddleware(...middlewares)(createStore); };
    return createStoreWithMiddleware(rootReducer, state);
  };

  const store = mockStore({});
  const wrapper = shallow(
    <Provider store={store}>
      <ResetPassword />
    </Provider>,
  );
});
describe('ResetPassword page Components', () => {
  it(' contains input', () => {
    jest.useFakeTimers();
    act(() => {
      render(
        <Router>
          <Provider store={store1}>
            <ResetPassword />
          </Provider>
        </Router>,

      );
    });
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    const { getByTestId } = render(
      <Router>
        <Provider store={store1}>
          <ResetPassword />
        </Provider>
      </Router>,

    );
    const input = getByTestId('input');

    expect(input.children.length).toBe(0);

    jest.useRealTimers();

    // expect(setTimeout).toHaveBeenCalledTimes(1);
  });
  it('submit inputted element', () => {
    jest.useFakeTimers();
    act(() => {
      render(
        <Router>
          <Provider store={store1}>
            <ResetPassword />
          </Provider>
        </Router>,

      );
    });
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const { getByPlaceholderText } = render(
      <Router>
        <Provider store={store1}>
          <ResetPassword />
        </Provider>
      </Router>,

    );
    const node = getByPlaceholderText('Your email');

    fireEvent.change(node, { target: { value: 'mcstain1639@gmail.com' } });
    const { getByText } = render(
      <Router>
        <Provider store={store1}>
          <ResetPassword />
        </Provider>
      </Router>,
    );
    const node2 = getByText('Reset your password');
    fireEvent.click(node2);
  });
});
