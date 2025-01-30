import React, { useState, useEffect } from 'react';

const AccountSetts = () => {
  const [username, setUsername] = useState(''); // State for username
  const [profilePicture, setProfilePicture] = useState(''); // State for profile picture URL

  // Handle changes to the username input field
  const handleUsernameChange = (event) => {
    if(event.target.value.length < 5){
    setUsername(event.target.value);
    }
  };

  // Handle changes to the profile picture input field
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file); // Create a preview URL for the selected image
      setProfilePicture(previewUrl); // Set the preview URL
    }
  };

  const handleSaveChanges = async () => {
    try {
      const formData = new FormData();
      formData.append('username', username); // Add the new username to the form data
      formData.append('profilePicture', profilePicture); // Add the new profile picture URL to the form data

      // Send a request to update the user data
      const response = await fetch('/api/user', {
        method: 'PUT',
        body: formData, // Send form data to the server
      });

      if (!response.ok) {
        throw new Error('Failed to update user data');
      }

      // Optionally, handle success (like showing a message or updating the UI)
      console.log('User data updated successfully!');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  // Trigger handleSaveChanges whenever username or profilePicture changes
  useEffect(() => {
    if (username || profilePicture) {
      handleSaveChanges();  // Call handleSaveChanges whenever either of the states changes
    }
  }, [username, profilePicture]); // Dependencies: run when username or profilePicture changes
  
  // Cleanup the URL when the component unmounts
  useEffect(() => {
    return () => {
      if (profilePicture && profilePicture.startsWith('blob:')) {
        URL.revokeObjectURL(profilePicture); // Free up memory by revoking the object URL
      }
    };
  }, [profilePicture]); // This cleanup effect runs whenever profilePicture changes

  return (
    <div className="background">
      <link rel="stylesheet" href="/styles.css" />
      <div className="navBar">
        <div className="usernav">{username || 'Bob'}</div>
        <div className="flex-text">Account Settings</div>
        <img 
          src={profilePicture || '/favicon.png'} 
          alt="Profile picture" 
          className="pfpnav" 
        />
        <button id="backtolog">Previous</button>
        <button id="signout">Sign out</button>
      </div>
      <hr />
      <div className="settings">
        <div className="settingsitem">
          <label>
            Username:
            <input 
              type="text" 
              value={username} 
              onChange={handleUsernameChange} 
              placeholder="Enter your username" 
            />
          </label>
        </div>
        <div className="settingsitem">
          <label>
            Profile Picture:
            <input 
              type="file" 
              onChange={handleProfilePictureChange} 
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default AccountSetts;