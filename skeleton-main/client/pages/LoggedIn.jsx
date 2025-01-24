import React from 'react';



const LoggedIn = () => {
  return (
    <div className="background">
      <link rel="stylesheet" href="/styles.css" />
      <div>
          <h1 className="navBar">MIT Geoguessr</h1>
        </div>
      <hr />
      <div className="flexButton">
      <button type="button" id="play">Play</button>
      <button type="button" id="lead">Leaderboard</button>
      <button type="button" id="accSett">Account Settings</button>
      </div>
      <script src="/src/playbutton.js"></script>
    </div>
  );
};

export default LoggedIn; 