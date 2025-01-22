import React, { useState, useEffect } from 'react';


const ProMode = () => {
  const images = [
    { src: '/srcimages/IMG_2745.jpg', value: '32' },
    { src: '/srcimages/R.png', value: 'spiky' }
  ];

  const [randomImage, setRandomImage] = useState({});
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    console.log(`Random index: ${randomIndex}`); // Debug log
    setRandomImage(images[randomIndex]);
  }, []);

  useEffect(() => {
    if (isTimeUp) return;
    console.log("f");

    const timerId = setInterval(() => {
   /*   setTimeLeft((prevTime) => {
        console.log(`Time left: ${prevTime}`); // Log the time left every second
        if (prevTime <= 1) {
          clearInterval(timerId);
          setIsTimeUp(true);
          return 0;
        }
        return prevTime - 1;
      });*/
      console.log("g");
      setTimeLeft(timeLeft -1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
    if (event.target.value.toLowerCase() === randomImage.value.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Try again!');
    }
  };

  return (
    <div className="background">
      <div className="navBar">
      <div className="flex-item-left"><b>Pro Mode</b></div>
      <div className="timer">Time Left: {timeLeft} seconds</div>
      </div>
      <link rel="stylesheet" href="/styles.css" />
      <div className = "flex-container">
      <img src={randomImage.src} alt="Randomized Image" />
      <img src="/srcimages/MITgeoguessergame.png" alt="MIT Geoguesser image" />
      </div>
      {isTimeUp ? (
        <div>Time's up! The correct answer was: {randomImage.value}</div>
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

export default ProMode;
