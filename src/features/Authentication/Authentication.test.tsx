import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Authentication';
import { signInWithGoogle } from '../../services/firebase';

describe('Login', () => {
  test('renders Sing in text', () => {
    render(
      <Login
        hasSessionActive
        signInWithGoogle={jest.fn()}
        singInWithEmail={jest.fn()}
        createUserWithEmail={jest.fn()}
      />
    );
    const h1title = screen.getByTestId('h1-title');
    expect(h1title.textContent).toBe('Sign in');
  });

  test('renders Sing up text', () => {
    render(
      <Login
        hasSessionActive={false}
        signInWithGoogle={jest.fn()}
        singInWithEmail={jest.fn()}
        createUserWithEmail={jest.fn()}
      />
    );
    const h1title = screen.getByTestId('h1-title');
    expect(h1title.textContent).toBe('Sign Up');
  });

  test('Button text should be "Login" when the user has a session', () => {
    render(
      <Login
        hasSessionActive
        signInWithGoogle={jest.fn()}
        singInWithEmail={jest.fn()}
        createUserWithEmail={jest.fn()}
      />
    );
    const btn = screen.getByTestId('submitBtn');
    expect(btn.textContent).toBe('Login');
  });

  test('Button text should be "Create account" when the user has a session', () => {
    render(
      <Login
        hasSessionActive={false}
        signInWithGoogle={jest.fn()}
        singInWithEmail={jest.fn()}
        createUserWithEmail={jest.fn()}
      />
    );
    const btn = screen.getByTestId('submitBtn');
    expect(btn.textContent).toBe('Create account');
  });

  test('Should call signInWithGoogle when the user clicks on Google button', () => {
    const signInWithGoogle = jest.fn();
    render(
      <Login
        hasSessionActive
        signInWithGoogle={signInWithGoogle}
        singInWithEmail={jest.fn()}
        createUserWithEmail={jest.fn()}
      />
    );

    fireEvent.click(screen.getByTestId('googleBtn'));
    expect(signInWithGoogle).toHaveBeenCalled();
  });
});
