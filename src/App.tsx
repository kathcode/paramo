import React from 'react';
import './App.css';
import Auth from './features/Auth/Auth';

import {
  signInWithGoogle,
  createUserWithEmail,
  singInWithEmail,
} from './services/firebase';

function App() {
  return (
    <div className="App">
      <h1>Paramo</h1>
      <Auth
        hasSessionActive
        signInWithGoogle={signInWithGoogle}
        createUserWithEmail={createUserWithEmail}
        singInWithEmail={singInWithEmail}
      />
    </div>
  );
}

export default App;
