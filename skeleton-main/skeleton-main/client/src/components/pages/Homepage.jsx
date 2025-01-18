import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
const Homepage = () => {

  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    // Handle successful login here
    const token = response.credential;
    console.log('Token:', token);
  };

  const handleLoginFailure = (error) => {
    console.log('Login Failed:', error);
    // Handle login failure here
  };

  return (
    
    <div className="background">
      <link rel="stylesheet" href="/styles.css" />
      <div>
        <h1 className="primary-header">MIT Geoguessr</h1>
      </div>
      <button id="firstButton">Log in with Google</button>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
      <img src="/srcimages/stardogggyy1.png" alt="Spiky text bubble" width="300" />
      <div className="container">
        Geoguessr localized to MIT's main buildings!
      </div>
      <script src="/playbutton.js"></script>
    </div>
    
  );
};

export default Homepage;