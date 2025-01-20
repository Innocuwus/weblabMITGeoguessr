import React, { useState, useEffect } from 'react';

const EasyMode = () => {
  // Array of objects where each object contains an image and a value
  const images = [
    { src: '/srcimages/stardogggyy1.png', value: 'Inno' },
    { src: '/srcimages/IMG_2745.jpg', value: '32' },
    { src: '/srcimages/R.png', value: 'spiky' }
  ];

  const [randomImage, setRandomImage] = useState({});
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [timeLeft, setTimeLeft] = useState(30); // Set timer to 30 seconds
  const [isTimeUp, setIsTimeUp] = useState(false); // To check if time is up

  // Use useEffect to randomly select an image on page load or refresh
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length); // Generate random index
    setRandomImage(images[randomIndex]); // Set the random image and its associated value
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  // Set up timer countdown
  useEffect(() => {
    if (isTimeUp) return; // If time is already up, do not start a new timer

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId); // Stop the timer
          setIsTimeUp(true); // Set time up status
          return 0;
        }
        return prevTime - 1; // Decrease time by 1 second
      });
    }, 1000);

    // Cleanup the interval on component unmount or when timer is stopped
    return () => clearInterval(timerId);
  }, [isTimeUp]); // Run only once when the timer starts

  // Function to handle user input and compare it with the image value
  const handleInputChange = (event) => {
    setUserInput(event.target.value); // Update user input

    // Compare the user input with the value associated with the random image
    if (event.target.value.toLowerCase() === randomImage.value.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Try again!');
    }
  };

  return (
    <div className="background">
      <link rel="stylesheet" href="/styles.css" />
      <div>Easy Mode</div>
      <div className="timer">Time Left: {timeLeft} seconds</div>
      <img src={randomImage.src} alt="Randomized Image" />
      <img src="/srcimages/MITgeoguessergame.png" alt="MIT Geoguesser image" />
      {isTimeUp ? (
        <div>Time's up! The correct answer was: {randomImage.value}</div>
      ) : (
        <div>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Guess the value"
            disabled={isTimeUp} // Disable input when time is up
          />
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default EasyMode;