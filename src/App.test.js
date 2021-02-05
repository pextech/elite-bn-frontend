
import React from 'react';
import App from './App';
import Index from './components/Home';
import { shallow } from 'enzyme';

describe('rendering components', () => {
    it('renders app components', () => {
        shallow(<App />);
    });
    it('renders header', () => {
        const wrapper = shallow(<App />);
        const header = (<h2 className="m-6">
        Welcome to Our Very beginning of this Barefoot Front-end Implementation
      </h2>);
      expect(wrapper.contains(header)).toEqual(false)
    })
})
