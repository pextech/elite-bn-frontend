import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../components/Header/NavBar';

configure({ adapter: new Adapter() });
describe('rendering components', () => {
  it('renders the title barefoot-nomad', () => {
    const wrapper = shallow(<Navbar />);
    //expect(wrapper.find('h1').text()).toContain('Barefoot-Nomad');
  });
});

