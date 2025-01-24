import React from 'react';




const PlayStage = () => {
  return (
    <div className="background">
      <link rel="stylesheet" href="/styles.css" />
      <div>
          <h1 className="navBar">Gamemodes</h1>
        </div>
      <hr />
      <div>
        <button id="easy">Easy</button>
        <button id="normal">Normal</button>
        <button id="pro">Pro</button>
        <script src="/src/playbutton.js"></script>
      </div>
    </div>
  );
};

export default PlayStage;