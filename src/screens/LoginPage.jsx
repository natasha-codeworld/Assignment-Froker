// src/screens/LoginPage.jsx
import React, { useState } from 'react';
import '../styles/LoginPageStyles.css';

export default function LoginPage({ navigate }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    navigate('Home');
  };

  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <input
        className="input"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
