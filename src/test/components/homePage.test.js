import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../components/Home';

describe('Home Page', () => {
  it('renders Home components', () => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });
});
