import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import DropMenu from '../../components/LandingPage/DropMenu';

describe('Test <DropMenu />', () => {
  beforeEach(() => {
    render(
      <Router>
        <DropMenu />
      </Router>
    );
  });
  it('should handle click', () => {
    expect(screen.getByTestId('drop-down')).toBeTruthy();
    fireEvent.click(screen.getByTestId('drop-down'));
  });
});
