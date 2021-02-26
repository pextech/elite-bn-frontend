import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../Routes';

import App from '../../App';
import Index from '../../components/Home';

describe('rendering components', () => {
  it('renders app components', () => {
    shallow(
      <Router>
        <div className="App bg-gray-100">
          <Routes />
        </div>
      </Router>,
    );
  });
});
