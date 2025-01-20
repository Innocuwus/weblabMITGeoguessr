import React, { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'; // Import Google Login
import jwt_decode from "jwt-decode";
import { socket } from "../client-socket";
import { get, post } from "../utilities";
import "../utilities.css";

export const UserContext = createContext(null);

const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    // Check if the user is logged in when the app loads
    get("/api/whoami").then((user) => {
      console.log(user);  // Log the user to see what the server returns
      if (user._id) {
        setUserId(user._id);
      }
    });
  }, []);

  // Handle login success through Google OAuth
  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);

    // Send the token to the server to log in and initialize the socket
    post("/api/login", { token: userToken }).then((user) => {
      console.log(user);  // Log the user object after successful login
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  // Handle logout and clear user data
  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  // Context value to share user and auth handlers across app
  const authContextValue = {
    userId,
    handleLogin,
    handleLogout,
  };

  return (
    // Wrap the app with GoogleOAuthProvider to enable Google login
    <GoogleOAuthProvider clientId="155904255899-0j74s5m98cfdi6srsmohhq45aokbb0hb.apps.googleusercontent.com">
      <UserContext.Provider value={authContextValue}>
        <div className="App">
          {/* Render the Google login button only if user is not logged in */}
          {!userId ? (
            <GoogleLogin
              onSuccess={handleLogin}
              onError={(error) => console.log("Login Failed:", error)}
            />
          ) : (
            <div>
              <h2>Welcome, you're logged in!</h2>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
          <Outlet />
        </div>
      </UserContext.Provider>
    </GoogleOAuthProvider>
  );
};

export default App;
