import React from 'react';


const LeaderPage = () => {
  return (
    <div className="background">
      <link rel="stylesheet" href="/styles.css" />
      <div className="navBar">
          <div className='flex-text'>Leaderboard</div>
          <button id="backtolog">Previous</button>
          <button id="signout">Sign out</button>
        </div>
        <hr />
        <div className='flexLeaderboard'>
      <b>The Top 10!</b>
      <ul>
        <li>1st: </li>
        <li>2nd: </li>
        <li>3rd: </li>
        <li>4th: </li>
        <li>5th: </li>
        <li>6th: </li>
        <li>7th: </li>
        <li>8th: </li>
        <li>9th: </li>
        <li>10th: </li>
      </ul>
      </div>
    </div>
  );
};

export default LeaderPage;
