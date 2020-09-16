import React, { useEffect, useState } from 'react';

const StartMessage = ({ setIsTutorial, startMessage, setStartMessage }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const messageData = [
    'Wow, You did it!',
    'There are no more zombies!',
    'Wait a second... What is that!?',
    'Bill the Billionaire is rapidly disseminating COVID-19 in US!',
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
