import { signInWithGoogle } from './firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

jest.mock('firebase/auth', () => {
  const originalModule = jest.requireActual('firebase/auth');

  return {
    ...originalModule,
    signInWithPopup: () => ({
      user: {
        username: 'lenny',
      },
    }),
    GoogleAuthProvider: jest.fn(),
  };
});

test('Should sign in with Google successfully and return the user', async () => {
  const user = { username: 'lenny' };
  const resp = { user };
  const response = await signInWithGoogle();
  const googleProvider = new GoogleAuthProvider();
  expect(signInWithPopup(getAuth(), googleProvider)).toEqual(resp);
  expect(response).toEqual(user);
});
