import React from 'react';
import './App.css';
import Login from './pages/Login/Login';

import {
  signInWithGoogle,
  createUserWithEmail,
  singInWithEmail,
} from './services/firebase';

function App() {
  return (
    <div className="App">
      <h1>Paramo</h1>
      <Login
        hasSessionActive
        signInWithGoogle={signInWithGoogle}
        createUserWithEmail={createUserWithEmail}
        singInWithEmail={singInWithEmail}
      />
    </div>
  );
}

export default App;
