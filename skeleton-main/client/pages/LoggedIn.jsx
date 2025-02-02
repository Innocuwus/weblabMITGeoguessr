import React, {useState, useEffect} from 'react';

const LoggedIn = () => {

  const [username, setUsername] = useState("Bob");
  const [imageUrl, setImageUrl] = useState("/favicon.png");
  
  useEffect(() => {
    async function fetchUserData(token) {
      try {
        const response = await fetch("/api/user", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json', 
          },
        });
  
        // Check if the response status is OK
        if (!response.ok) {
          const errorText = await response.text(); // Get the raw response text
          console.error("Error response:", errorText); // Log raw response for debugging
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        // Parse the JSON response
        const user = await response.json();
        setUsername(user.username);
        setImageUrl(user.profilePicture);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    }
  
    fetchUserData();
  }, []); // Runs once when the component mounts
  

  return (
    <div className="background">
      <link rel="stylesheet" href="/styles.css" />
      <div className="navBar">
          <div id="username" className='flex-text2'>Welcome back, {username}!</div>
          <img src={imageUrl} alt="profile picture" className='pfpnav' />
          <button id="signout" className='hug'>Sign out</button>
      </div>
      <hr />
      <div className="flexButton">
        <div className='flex-Buttons'>
      <button type="button" id="play">Choose Gamemode</button>
      </div>
      <div className='flex-Buttons'>
      <button type="button" id="lead">Leaderboard</button>
      </div>
      <div className='flex-Buttons'>
      <button type="button" id="accSett">Account Settings</button>
      </div>
      </div>
      <script src="/src/playbutton.js"></script>
    </div>
  );
};

export default LoggedIn; 