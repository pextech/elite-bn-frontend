import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import Login from '../components/Login';

configure({ adapter: new Adapter() });

describe('test case for login ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          {' '}
          <Login />
        </BrowserRouter>
      </Provider>
    );
  });


  it('email check', () => {
    // wrapper =shallow(<Login />);
    wrapper
      .find('#Email')
      .simulate('change', { target: { name: 'email', value: 'eric74@example.com' } });
  });
  it('password check', () => {
    // wrapper =shallow(<Login />);
    <input label="Password" name="Password" type="password" placeholder="Enter your password" />;
    wrapper
      .find('#Password')
      .simulate('change', { target: { name: 'password', value: 'samplepassword' } });
  });
  it('login check with right data', () => {
    // wrapper = shallow(<Login />);
    wrapper
      .find('#Email')
      .simulate('change', { target: { name: 'email', value: 'eric74@example.com' } });

    wrapper
      .find('#Password')
      .simulate('change', { target: { name: 'password', value: 'samplepassword' } });
    wrapper.find('form').simulate('submit');
  });

  it('login check with wrong data', () => {
    //  wrapper=shallow(<Login />);

    wrapper
      .find('#Email')
      .simulate('change', { target: { name: 'email', value: 'eric@example.com' } });

    wrapper
      .find('#Email')
      .simulate('change', { target: { name: 'password', value: 'samplepassword123' } });
    wrapper.find('form').simulate('submit');
  });
});
