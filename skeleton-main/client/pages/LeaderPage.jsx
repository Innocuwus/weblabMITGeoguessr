import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeaderPage = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Fetch the leaderboard data when the component mounts
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('/leaderboard'); // Make sure to use the correct endpoint
        setLeaderboard(response.data); // Set the leaderboard state
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
      <div className="background">
       <link rel="stylesheet" href="/styles.css" />
       <div className="navBar">
           <div className='flex-text'>Leaderboard</div>
         <button id="backtolog">Previous</button>
         <button id="signout">Sign out</button>
            </div>
         <hr />
      <h1>Leaderboard</h1>
      <ul>
        {leaderboard.map((user, index) => (
          <li key={user._id}>
            <span>{index + 1}. </span>
            <span>{user.username}</span>
            <span> - Correct Guesses: {user.correctGuesses}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderPage;
