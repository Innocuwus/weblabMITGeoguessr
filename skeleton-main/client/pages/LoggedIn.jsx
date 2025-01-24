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
        <div className='flex-Buttons'>
      <button type="button" id="play">Play</button>
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