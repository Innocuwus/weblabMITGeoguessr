import React, {useState, useEffect} from 'react';
import '/srcimages/favicon.png';
const LoggedIn = () => {

  const [username, setUsername] = useState("Guest");
  const [imageUrl, setImageUrl] = useState("/srcimages/favicon.png");
  
  useEffect(() => {
    async function fetchUserData() {
      try {
        // const token = localStorage.getItem("authToken"); // Retrieve token from localStorage
        // const response = await fetch("/user", {
        //   headers: {
        //     "Authorization": `Bearer ${token}` // or any other auth method you're using
        //   }
        // });

          const response = await fetch("/api/user", {
            credentials: 'include', // Include cookies in the request
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
      <button type="button" id="play">Choose Gamemodes</button>
      </div>
      {/* <div className='flex-Buttons'>
      <button type="button" id="lead">Leaderboard</button>
      </div> */}
      <div className='flex-Buttons'>
      <button type="button" id="accSett">Account Settings</button>
      </div>
      </div>
      <script src="/src/playbutton.js"></script>
    </div>
  );
};

export default LoggedIn; 