// src/screens/HomePage.jsx
import React from 'react';
import '../styles/HomePageStyles.css';

export default function HomePage({ navigate }) {
  return (
    <div className="container">
      <h1 className="sectionTitle">Stories</h1>
      <div className="storiesSection">
        <div className="story"></div>
        <div className="story"></div>
        <div className="story"></div>
      </div>

      <h1 className="sectionTitle">Posts</h1>
      <div className="postsSection">
        <div className="post"></div>
        <div className="post"></div>
      </div>

      <h1 className="sectionTitle">Suggestions</h1>
      <div className="suggestionsSection">
        <div className="suggestion"></div>
        <div className="suggestion"></div>
      </div>

      <button onClick={() => navigate('Profile')}>Go to Profile</button>
    </div>
  );
}
