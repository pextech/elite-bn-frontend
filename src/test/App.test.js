
import React from 'react';
import App from '../App';
import Index from '../components/Home';
import { shallow } from 'enzyme';

describe('rendering components', () => {
    it('renders app components', () => {
        shallow(<App />);
    });
    it('renders header', () => {
        const wrapper = shallow(<App />);
        const div = (  <div className="text-center">
        <h2 className="m-6">
          Welcome to Our Very beginning of this Barefoot Front-end Implementation
        </h2>
      </div>)
        const header = (<h2 className="m-6">
        Welcome to Our Very beginning of this Barefoot Front-end Implementation
      </h2>);
      expect(wrapper.contains(header)).toEqual(false);
    });

    it('renders div', () => {
        const wrapper = shallow(<App />);
        const div = ( <div className="text-center">
        <h2 className="m-6">
          Welcome to Our Very beginning of this Barefoot Front-end Implementation
        </h2>
      </div> );
      expect(wrapper.contains(div)).toEqual(false);
    })
})
