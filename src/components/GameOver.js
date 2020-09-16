import React from 'react';

const GameOver = () => {
  return (
    <div className="GameOver">
      <div className="overlay">
        <div className="message-container">
          <p>Hey look! All Americans are zombies now!</p>
          <button onMouseUp={() => window.location.reload()}>RESTART</button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
