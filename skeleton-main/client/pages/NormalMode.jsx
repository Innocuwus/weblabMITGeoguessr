import React, { useState, useEffect } from 'react';
import axios from "axios";

const NormalMode = () => {
  const images = [
    { src: '/IMG_2745.jpg', value: '32' },
    { src: '/bl7.jpg', value: '7' },
    { src: '/bl3.jpg', value: '3' },
    { src: '/bl10.jpg', value: '10' },
    { src: '/bl26.jpg', value: '26' }
  ];


  const [randomImage, setRandomImage] = useState({});
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [timeLeft, setTimeLeft] = useState(20);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    console.log(`Random index: ${randomIndex}`); // Debug log
    setRandomImage(images[randomIndex]);
  }, []);

  useEffect(() => {
    if (isTimeUp) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        console.log(`Time left: ${prevTime}`); // Log the time left every second
        if (prevTime <= 1) {
          clearInterval(timerId);
          setIsTimeUp(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [isTimeUp]);

  const handleInputChange = async (event) => {
    setUserInput(event.target.value);
    if (event.target.value.toLowerCase() === randomImage.value.toLowerCase()) {
      setFeedback('Correct!');
      try {
        await axios.put('/user');
        console.log('Correct guesses updated!');
      } catch (error) {
        console.error('Error updating user data:', error);
      }
    } else {
      setFeedback('Try again!');
    }
  };

  return (
    <div className="background">
      <div className="navBar">
      <div className="flex-item-left"><b>Normal Mode</b></div>
      <div className="timer">Time Left: {timeLeft} seconds</div>
      <button id="backtoplay">Previous</button>
      <button id="signout">Sign out</button>
      </div>
      <link rel="stylesheet" href="/styles.css" />
      <div className = "flex-container">
      <img src={randomImage.src} alt="Randomized Image" />
      <img src="/MITgeoguessergame.png" alt="MIT Geoguesser image" />
      </div>
      {isTimeUp ? (
        <div>Time's up! The correct answer was building: {randomImage.value}</div>
      ) : (
        <div>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Guess the building number"
            disabled={isTimeUp}
          />
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default NormalMode;
