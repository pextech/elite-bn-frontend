import React from 'react';
import { Switch } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Router from '../Routes/index';

Enzyme.configure({ adapter: new Adapter() });

describe('Test <Router />', () => {
  it('should contains Router', () => {
    expect(shallow(<Router />).find(Switch));
  });
});
