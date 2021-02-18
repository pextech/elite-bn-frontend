import React from 'react';
import Enzyme from 'enzyme';
import { fireEvent, render, waitFor, cleanup, screen, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import MutationObserver from 'mutation-observer';
import { Provider } from 'react-redux';
import Auth from './Auth';
import store from '../../store/index';

global.MutationObserver = MutationObserver;

Enzyme.configure({ adapter: new Adapter() });

describe('Test <Auth />', () => {
  beforeEach(async () => {
    await act(async () =>
      render(
        <Provider store={store}>
          <Router>
            <Auth />
          </Router>
        </Provider>
      )
    );
    act(() => {
      jest.useFakeTimers();
      jest.advanceTimersByTime(3000);
    });
  });

  afterEach(cleanup);

  it('should contains form', () => {
    expect(screen.queryByTestId('form')).toBeTruthy();
  });

  it('should handle continue with google', async () => {
    fireEvent.click(screen.getByRole('button', { name: /Google/i }));
    expect(screen.getAllByRole('button', { name: /Google/i })).toHaveLength(1);
  });
  it('should handle continue with facebook', async () => {
    fireEvent.click(screen.getByRole('button', { name: /Facebook/i }));
    expect(screen.getAllByRole('button', { name: /Facebook/i })).toHaveLength(1);
  });

  it('should display required error when value is invalid', async () => {
    fireEvent.submit(screen.getByRole('button', { name: /Register/i }));

    expect(await screen.findAllByRole('alert')).toHaveLength(4);
  });

  it('should display matching error when email is invalid', async () => {
    fireEvent.input(screen.getByPlaceholderText('E-mail'), {
      target: {
        value: 'test',
      },
    });

    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: {
        value: 'password',
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/First/i), {
      target: {
        value: 'cele',
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/Last/i), {
      target: {
        value: 'peter',
      },
    });

    fireEvent.submit(screen.getByRole('button', { name: /Register/i }));

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(1));
    expect(screen.getByPlaceholderText('E-mail').value).toBe('test');
    expect(screen.getByPlaceholderText('Password').value).toBe('password');
    expect(screen.getByPlaceholderText(/Last/i).value).toBe('peter');
    expect(screen.getByPlaceholderText(/First/i).value).toBe('cele');
  });

  it('should display matching error when password is invalid', async () => {
    fireEvent.input(screen.getByPlaceholderText('E-mail'), {
      target: {
        value: 'test@gmail.com',
      },
    });

    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: {
        value: 'pass',
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/First/i), {
      target: {
        value: 'cele',
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/Last/i), {
      target: {
        value: 'peter',
      },
    });

    fireEvent.submit(screen.getByRole('button', { name: /Register/i }));

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(1));
    expect(screen.getByPlaceholderText('E-mail').value).toBe('test@gmail.com');
    expect(screen.getByPlaceholderText('Password').value).toBe('pass');
    expect(screen.getByPlaceholderText(/Last/i).value).toBe('peter');
    expect(screen.getByPlaceholderText(/First/i).value).toBe('cele');
  });

  it('should not display error when input invalid', async () => {
    fireEvent.input(screen.getByPlaceholderText('E-mail'), {
      target: {
        value: 'test@gmail.com',
      },
    });

    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: {
        value: 'password',
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/First/i), {
      target: {
        value: 'peter',
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/Last/i), {
      target: {
        value: 'cele',
      },
    });

    fireEvent.submit(screen.getByRole('button', { name: /Register/i }));
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    expect(screen.getByPlaceholderText('E-mail').value).toBe('');
    expect(screen.getByPlaceholderText('Password').value).toBe('');
    expect(screen.getByPlaceholderText(/Last/i).value).toBe('');
    expect(screen.getByPlaceholderText(/First/i).value).toBe('');
  });
});
