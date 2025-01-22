import React, { useState } from 'react';
import './styles.css';

const AccountSetts = () => {
  const [username, setUsername] = useState(''); // State variable for username
  const [profilePicture, setProfilePicture] = useState(''); // State variable for profile picture URL

  // Handle changes to the username input field
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Handle changes to the profile picture input field
  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.value);
  };

  return (
    <div className="background">
      <link rel="stylesheet" href="/styles.css" />
      <div className='navBar'>
      <h1>Account Settings Page</h1>
      </div>
      <div className="profile">
        <img src={profilePicture || '/default-profile.png'} alt="Profile" className="profile-picture" />
        <h2>{username || 'Your Username'}</h2>
      </div>
      <div className="settings">
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter your username" />
        </label>
        <label>
          Profile Picture URL:
          <input type="text" value={profilePicture} onChange={handleProfilePictureChange} placeholder="Enter profile picture URL" />
        </label>
      </div>
    </div>
  );
};

export default AccountSetts;