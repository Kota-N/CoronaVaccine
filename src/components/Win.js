import React, { useEffect, useState } from 'react';

const Win = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const messageData = [
    'Wow!',
    'You finally stopped Dr.Zombie.',
    '...',
    'What?',
    '"Is that it?"',
    'Well, I guess I can congratulate you a little more.',
    'You saved America! You are the hero! Yay!',
    '...',
    'What?',
    "Okay, okay, I'll give you a special secret.",
    'Did you know you can upgrade helpers once you hire a certain amount?',
    'Upgraded helpers are even more powerful.',
    'Oh, you know it already?',
    'Well, the ultimate hint is "Don\'t underestimate your own tapping!"',
    "Let's try it again!",
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
