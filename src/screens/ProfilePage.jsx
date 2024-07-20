// src/screens/ProfilePage.jsx
import React from 'react';
import '../styles/ProfilePageStyles.css';


export default function ProfilePage({ navigate }) {
  return (
    <div className="container">
      <div className="topSection">
        <div className="profilePic"></div>
        <div className="info">
          <p>Followers: 100</p>
          <p>Following: 50</p>
        </div>
      </div>

      <div className="secondSection">
        <p>Posts: 10</p>
      </div>

      <div className="postsSection">
        <div className="post">
          
        </div>
        <div className="post">
        </div>
      </div>
      

      <button onClick={() => navigate('Home')}>Go to Home</button>
    </div>
  );
}
