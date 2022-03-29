import React from 'react';
import './App.css';
import Authentication from './features/Authentication/Authentication';

import {
  signInWithGoogle,
  createUserWithEmail,
  singInWithEmail,
} from './services/firebase';

function App() {
  return (
    <div className="App">
      <h1>Paramo</h1>
      <Authentication
        hasSessionActive
        signInWithGoogle={signInWithGoogle}
        createUserWithEmail={createUserWithEmail}
        singInWithEmail={singInWithEmail}
      />
    </div>
  );
}

export default App;
