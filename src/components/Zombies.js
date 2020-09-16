import React, { useEffect, useState } from 'react';
import zombieIcon from '../assets/images/zombie-icon.png';
import StartMessage from './StartMessage';

const Zombies = ({
  soldVaccine,
  setSoldVaccine,
  isTutorial,
  setIsTutorial,
}) => {
  const [zombies, setZombies] = useState(5);
  const [startMessage, setStartMessage] = useState(false);

  useEffect(() => {
    const countAndIcon = document.querySelector(
      '.zombie-count-container .count-and-icon'
    );

    if (!isTutorial) {
      countAndIcon.style.justifyContent = 'flex-start';
      const interval = setInterval(() => {
        setZombies(prev => (prev += 2111));
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isTutorial]);

  const useVaccine = () => {
    const parentDiv = document.querySelector('.decrease-animation');
    const minusZombieDiv = document.createElement('div');
    minusZombieDiv.classList.add('minus-zombie');

    if (zombies - soldVaccine > 0) {
      // Decrease Animation
      minusZombieDiv.innerHTML = `
    <img src=${zombieIcon} alt="zombie icon" />
    <p>-${soldVaccine}</p>
    `;
      parentDiv.appendChild(minusZombieDiv);
      setTimeout(() => {
        minusZombieDiv.remove();
      }, 1000);

      setZombies(prev => (prev -= soldVaccine));
      setSoldVaccine(prev => (prev -= prev));
    } else {
      // Decrease Animation
      minusZombieDiv.innerHTML = `
    <img src=${zombieIcon} alt="zombie icon" />
    <p>-${zombies}</p>
    `;
      parentDiv.appendChild(minusZombieDiv);
      setTimeout(() => {
        minusZombieDiv.remove();
      }, 1000);

      setSoldVaccine(prev => prev - zombies);
      setZombies(0);
      setStartMessage(true);
    }
  };

  const addCommasToNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="Zombies">
      <div className="zombie-count-container">
        <div className="count-and-icon">
          <div className="decrease-animation"></div>
          <img src={zombieIcon} alt="zombie icon" />
          <p>{addCommasToNumber(zombies)}</p>
        </div>
        {!isTutorial && <p className="population">/300,000,000</p>}
      </div>
      <button onMouseUp={useVaccine}>Use Vaccine ({soldVaccine})</button>
      <StartMessage
        setIsTutorial={setIsTutorial}
        startMessage={startMessage}
        setStartMessage={setStartMessage}
      />
    </div>
  );
};

export default Zombies;
