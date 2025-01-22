import React from 'react';
import '/styles.css';



const PlayStage = () => {
  return (
    <div className="background">
      <link rel="stylesheet" href="/styles.css" />
      <h1>Gamemodes</h1>
      <hr />
      <div>
        <button id="easy">Easy</button>
        <button id="normal">Normal</button>
        <button id="pro">Pro</button>
        <script src="/playbutton.js"></script>
      </div>
    </div>
  );
};

export default PlayStage;