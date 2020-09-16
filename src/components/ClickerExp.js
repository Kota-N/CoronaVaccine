import React, { useEffect } from 'react';

const ClickerExp = ({
  clickCount,
  setClickCount,
  incrementAmount,
  setIncrementAmount,
}) => {
  const addCommasToNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    const expProgress = document.getElementById('exp-progress');
    const levelupDiv = document.querySelector('.levelup-animation');

    if (clickCount < 100) {
      expProgress.style.width = `${clickCount}%`;
    } else {
      setClickCount(0);
      expProgress.style.width = `${clickCount}%`;
      setIncrementAmount(prev => prev * 2);

      // Level Up Animation
      const levelupP = document.createElement('p');
      levelupP.innerText = `LEVEL UP! (+${addCommasToNumber(incrementAmount)})`;
      levelupDiv.appendChild(levelupP);
      setTimeout(() => {
        levelupP.remove();
      }, 4500);
    }
  }, [clickCount, setClickCount, incrementAmount, setIncrementAmount]);

  return (
    <div className="ClickerExp">
      <div className="empty-bar">
        <div className="progress-bar" id="exp-progress"></div>
      </div>
      <div className="levelup-animation"></div>
    </div>
  );
};

export default ClickerExp;
