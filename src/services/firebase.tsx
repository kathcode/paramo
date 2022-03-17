import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyAITrXChFf7KVdaibvh2MK-qtOSzODYTVU',
  authDomain: 'orange27.firebaseapp.com',
  projectId: 'orange27',
  storageBucket: 'orange27.appspot.com',
  messagingSenderId: '6427449629',
  appId: '1:6427449629:web:98b9af7a3b4051fd4ce9f4',
});

export const signInWithGoogle = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const response = await signInWithPopup(getAuth(), googleProvider);
    return response.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const singInWithEmail = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    return response.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const createUserWithEmail = async (email: string, password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password
    );
    return response.user;
  } catch (error) {
    console.log(error);
  }
};

export const logOut = async () => {
  try {
    return await signOut(getAuth());
  } catch (error: any) {
    throw new Error(error.message);
  }
};
