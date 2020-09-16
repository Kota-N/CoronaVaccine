import React, { useState } from 'react';
import vaccine from '../assets/images/vaccine.png';
import ClickerExp from './ClickerExp';

const Clicker = ({ setVaccine, isTutorial }) => {
  const [clickCount, setClickCount] = useState(0);
  const [incrementAmount, setIncrementAmount] = useState(1);

  const addCommasToNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleClick = () => {
    // Click Animation
    const parentDiv = document.querySelector('.click-animation');
    const clickedDiv = document.createElement('div');
    clickedDiv.classList.add('clicked-div');
    clickedDiv.innerHTML = `
    <img src=${vaccine} alt="vaccine icon" width="90px" height="90px" />
    <p>+${addCommasToNumber(incrementAmount)}</p>
    `;
    parentDiv.appendChild(clickedDiv);
    setTimeout(() => {
      clickedDiv.remove();
    }, 700);

    // Increment Vaccine
    setVaccine(prev => prev + incrementAmount);

    if (!isTutorial) setClickCount(prev => prev + 1);
  };

  return (
    <div className="Clicker">
      <div className="click-me" onMouseDown={handleClick}>
        <img id="vaccine-clicker" src={vaccine} alt="vaccine icon" />
      </div>
      <div className="click-animation"></div>
      {!isTutorial && (
        <ClickerExp
          clickCount={clickCount}
          setClickCount={setClickCount}
          incrementAmount={incrementAmount}
          setIncrementAmount={setIncrementAmount}
        />
      )}
    </div>
  );
};

export default Clicker;
