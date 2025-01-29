import React from 'react';

const PlayStage = () => {
  return (
    <div className="background">
      <link rel="stylesheet" href="/styles.css" />
      <div className="navBar">
          <div className='flex-text'>Gamemodes</div>
          <button id="backtolog">Previous</button>
          <button id="signout">Sign out</button>
        </div>
      <hr />
      <div className='flexButton'>
        <div className="flex-Buttons">
        <button id="easy">Easy</button>
        </div>
        <div className="flex-Buttons">
        <button id="normal">Normal</button>
        </div>
        <div className="flex-ButtonsPRO">
        <button id="pro">
          <img src="/srcimages/cooltext474648493168121.gif" /></button>
        </div>
        <script src="/src/playbutton.js"></script>
      </div>
    </div>
  );
};

export default PlayStage;