import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';
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

  test('Should call singInWithEmail when the user has an active session', () => {
    const singInWithEmail = jest.fn();
    render(
      <Login
        hasSessionActive
        signInWithGoogle={jest.fn()}
        singInWithEmail={singInWithEmail}
        createUserWithEmail={jest.fn()}
      />
    );

    fireEvent.click(screen.getByTestId('submitBtn'));
    expect(singInWithEmail).toHaveBeenCalled();
  });

  test('Should call createUserWithEmail when the user has not an active session', () => {
    const createUserWithEmail = jest.fn();
    render(
      <Login
        hasSessionActive={false}
        signInWithGoogle={jest.fn()}
        singInWithEmail={jest.fn()}
        createUserWithEmail={createUserWithEmail}
      />
    );

    fireEvent.click(screen.getByTestId('submitBtn'));
    expect(createUserWithEmail).toHaveBeenCalled();
  });
});
