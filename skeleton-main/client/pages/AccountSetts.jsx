import React, { useState } from 'react';


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
      <div>
      <h1 className="navBar">Account Settings Page</h1>
      </div>
      <div className="profile">
        <img src={profilePicture || '/default-profile.png'} alt="Profile" className="profile-picture" />
        <h2>{username || 'Your Username'}</h2>
      </div>
      <div className="settings">
        <div className="settingsitem">
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter your username" />
        </label>
        </div>
        <div className="settingsitem">
        <label>
          Profile Picture URL:
          <input type="file" value={profilePicture} onChange={handleProfilePictureChange} placeholder="Upload image" />
        </label> 
        </div>
      </div>
    </div>
  );
};

export default AccountSetts;