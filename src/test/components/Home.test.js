import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../../components/Home';

Enzyme.configure({ adapter: new Adapter() });

describe('Test <Home />', () => {
  it('should render div element', () => {
    expect(shallow(<Home />).contains('div'));
  });
});
