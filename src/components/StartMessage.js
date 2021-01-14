import React, { useEffect, useState } from 'react';

const StartMessage = ({ setIsTutorial, startMessage, setStartMessage }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const messageData = [
    'Wow, you did it!',
    'There are no more zombies!',
    'Wait a second... What is that!?',
    'Dr. Zombie is rapidly disseminating ZOMBIE-19 in the US!',
  ];

  const nextMessage = () => {
    if (currentMessage < messageData.length - 1) {
      setCurrentMessage(prev => prev + 1);
    } else {
      setCurrentMessage(prev => prev + 1);
      const overlayDiv = document.querySelector('.StartMessage .overlay');
      overlayDiv.classList.add('hide');
      setIsTutorial(false);
    }
  };
  useEffect(() => {}, [startMessage]);
  return (
    <div className="StartMessage">
      {startMessage && (
        <div className="overlay">
          <div className="message-container">
            <p>{messageData[currentMessage]}</p>
            <button onMouseUp={nextMessage}>NEXT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartMessage;
