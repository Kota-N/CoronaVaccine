import React, { useEffect, useState } from 'react';

const Win = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const messageData = [
    'Wow!',
    'You finally stopped Bill the Billionaire.',
    '...',
    'What?',
    '"Is that it?"',
    'Well, I guess I can congratulate you a little more.',
    'You saved the entire America! You are the hero! Yay!',
    '...',
    'What?',
    'Okay, okay, I give you a special secret.',
    'Did you know you can upgrade helpers once you hire a certain amount?',
    'Upgraded helpers are even more powerful.',
    'Oh, you know it already?',
    'Then, all I can say is "don\'t underestimate your own clicking.',
    'Try it out!',
  ];

  useEffect(() => {
    const btn = document.querySelector('.Win button');

    if (currentPage === messageData.length - 1) btn.innerText = 'RESTART';
  }, [currentPage, messageData]);

  const nextBtn = () => {
    setCurrentPage(prev => prev + 1);

    if (currentPage === messageData.length - 1) window.location.reload();
  };
  return (
    <div className="Win">
      <div className="overlay">
        <div className="message-container">
          <p>{messageData[currentPage]}</p>
          <button onMouseUp={nextBtn}>NEXT</button>
        </div>
      </div>
    </div>
  );
};

export default Win;
