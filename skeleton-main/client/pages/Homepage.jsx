// import React, { useEffect, useState } from 'react';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


// const Homepage = () => {

//   const CLIENT_ID = "155904255899-0j74s5m98cfdi6srsmohhq45aokbb0hb.apps.googleusercontent.com";

//   const [isClient, setIsClient] = useState(false);

//   // Set state to true when the component is mounted (client-side)
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Render a placeholder or alternative content during SSR
//   if (!isClient) {
//     return <div>Loading...</div>;
//   }

//   // Client-side rendering logic (Google login)
//   useEffect(() => {
//     // Initialize Google login only after component mounts
//     if (window.google) {
//       window.google.accounts.id.initialize({
//         client_id: CLIENT_ID, // Replace with your Google Client ID
//         callback: handleCredentialResponse,
//       });

//       window.google.accounts.id.renderButton(
//         document.getElementById('google-signin-button'),
//         { theme: 'outline', size: 'large' }
//       );
//     }
//   }, []);

//   // Handle the login response
//   const handleLogin = (response) => {
//     console.log('Login Success:', response);
//     // Handle successful login here (e.g., get the ID token)
//     // You can use response.credential to get the token
//   };

//   return (
//   <GoogleOAuthProvider clientId={CLIENT_ID}>
//       <div className="background">
//       <link rel="stylesheet" href="/styles.css" />
//         <div>
//           <h1 className="navBar">MIT Geoguessr</h1>
//         </div>
//         <div className = "container">
//         <div id="google-signin-button">
//         <GoogleLogin
//            onSuccess={handleLogin}
//           //  onError={err}
//            useOneTap
//         />
//         </div>
//         </div>
//         <div className="wow-container">
//           <div className="wowtext">
//          <b>Geoguessr localized to MIT's main buildings!</b>
//          </div>
//         </div>
//       </div>
//       </GoogleOAuthProvider >
//   );
// };

// export default Homepage;

import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

import '../styles.css'; // Ensure the correct path to your CSS file

const Homepage = () => {
  const CLIENT_ID = "155904255899-0j74s5m98cfdi6srsmohhq45aokbb0hb.apps.googleusercontent.com";

  const [isClient, setIsClient] = useState(false);

  // Set state to true when the component is mounted (client-side)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render a placeholder or alternative content during SSR
  // if (!isClient) {
  //   return <div>Loading...</div>;
  // }

  const handleLogin = (response) => {
    console.log('Login Success:', response);
    const token = response.credential;
    console.log('Token:', token); // Use the login function from auth module
  };

  const handleLoginFailure = (error) => {
    console.log('Login Failed:', error);
    // Handle login failure here
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
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
      </GoogleOAuthProvider >
  );
};

export default Homepage;