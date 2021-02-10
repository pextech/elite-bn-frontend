import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

describe('Home Page', () => {
  it('renders Home components', () => {
    render(<App />);
  });
});
