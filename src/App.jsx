// src/App.jsx
import React, { useState } from 'react';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';
import ProfilePage from './screens/ProfilePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Login');

  const renderPage = () => {
    switch (currentPage) {
      case 'Login':
        return <LoginPage navigate={setCurrentPage} />;
      case 'Home':
        return <HomePage navigate={setCurrentPage} />;
      case 'Profile':
        return <ProfilePage navigate={setCurrentPage} />;
      default:
        return <LoginPage navigate={setCurrentPage} />;
    }
  };

  return <div>{renderPage()}</div>;
}
