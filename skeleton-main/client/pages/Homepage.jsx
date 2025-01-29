import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

import '../styles.css'; // Ensure the correct path to your CSS file

const Homepage = () => {
  // const CLIENT_ID = "155904255899-0j74s5m98cfdi6srsmohhq45aokbb0hb.apps.googleusercontent.com";

  const [isClient, setIsClient] = useState(false);

  // Set state to true when the component is mounted (client-side)
  useEffect(() => {
    setIsClient(true);
  }, []);

  
  const handleLogin = (response) => {
    console.log('Login Success:', response);
    
    const token = response.credential; // The Google ID token
    
    console.log('Token:', token); // Check the token
    window.location.href = '/loggedin'; // Redirect the user to a "logged-in" page
  };

  const handleLoginFailure = (error) => {
    console.log('Login Failed:', error);
    // Handle login failure here
  };

  return (
   
       <div className="background">
       <link rel="stylesheet" href="/styles.css" />
         <div>
           <h1 className="navBar">MIT Geoguessr</h1>
         </div>
         <div className = "container">
         <GoogleLogin
           onSuccess={handleLogin}
            onError={handleLoginFailure}
           useOneTap
        />
        </div>
        <div className="wow-container">
          <div className="wowtext">
         <b>Geoguessr localized to MIT's main buildings!</b>
         </div>
        </div>
      </div>
      
  );
};


export default Homepage;