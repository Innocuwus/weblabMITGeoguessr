import React from 'react';




const PlayStage = () => {
  return (
    <div className="background">
      <link rel="stylesheet" href="/styles.css" />
      <div>
          <h1 className="navBar">Gamemodes</h1>
        </div>
      <hr />
      <div className='flexButton'>
        <div className="flex-Buttons">
        <button id="easy">Easy</button>
        </div>
        <div className="flex-Buttons">
        <button id="normal">Normal</button>
        </div>
        <div className="flex-Buttons">
        <button id="pro">Pro</button>
        </div>
        <script src="/src/playbutton.js"></script>
      </div>
    </div>
  );
};

export default PlayStage;