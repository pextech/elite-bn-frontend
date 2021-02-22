import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';

describe('rendering components', () => {
  xit('renders app components', () => {
    shallow(<App />);
  });
  xit('renders header', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          {' '}
          <App />
        </BrowserRouter>
      </Provider>
    );
    const div = (
      <div className="text-center">
        <h2 className="m-6">
          Welcome to Our Very beginning of this Barefoot Front-end Implementation
        </h2>
      </div>
    );
    const header = (
      <h2 className="m-6">
        Welcome to Our Very beginning of this Barefoot Front-end Implementation
      </h2>
    );
    expect(wrapper.contains(header)).toEqual(false);
  });
});
