import React, { useEffect, useState } from 'react';

const Tutorial = ({ money, vaccine, soldVaccine }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [currentHint, setCurrentHint] = useState(0);
  const messageData = [
    'COVID-19 has changed some people into zombies!',
    'Make vaccine to save them!',
  ];
  const hintData = [
    'Click to make vaccine',
    'Sell vaccine to earn coins',
    'Use vaccine you have sold',
  ];

  useEffect(() => {
    const hintContainer = document.querySelector('.hint-container');
    if (currentHint < hintData.length) {
      if (vaccine) {
        setCurrentHint(1);
      }
      if (money) {
        setCurrentHint(2);
        if (soldVaccine === 0) {
          hintContainer.classList.add('hide');
        }
      }
    }
  }, [money, vaccine, soldVaccine]);

  useEffect(() => {
    const hintContainer = document.querySelector('.hint-container');
    switch (currentHint) {
      case 1:
        hintContainer.style.top = '31vh';
        hintContainer.style.left = 'calc(50vw - 100px)';
        break;
      case 2:
        hintContainer.style.top = '13vh';
        hintContainer.style.left = 'calc(50vw - 200px)';
        break;
      default:
        hintContainer.style.top = '76vh';
        hintContainer.style.left = 'calc(50vw - 200px)';
    }
  }, [currentHint]);

  const nextMessage = () => {
    if (currentMessage < messageData.length - 1) {
      setCurrentMessage(prev => prev + 1);
    } else {
      setCurrentMessage(prev => prev + 1);
      const overlayDiv = document.querySelector('.Tutorial .overlay');
      overlayDiv.classList.add('hide');
    }
  };

  const nextHint = () => {
    const hintContainer = document.querySelector('.hint-container');
    if (currentHint < hintData.length - 1) {
      setCurrentHint(prev => prev + 1);
    } else {
      hintContainer.classList.add('hide');
    }
  };

  return (
    <div className="Tutorial">
      <div className="overlay">
        <div className="message-container">
          <p>{messageData[currentMessage]}</p>
          <button onMouseUp={nextMessage}>NEXT</button>
        </div>
      </div>

      <div className="hint-container">
        {currentMessage === messageData.length && (
          <div className="hint">
            <p>
              {hintData[currentHint]} <i className="fas fa-arrow-up"></i>
            </p>
            <button onMouseUp={nextHint}>NEXT</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tutorial;
