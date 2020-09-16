import React, { useEffect, useState } from 'react';
import zombieIcon from '../assets/images/zombie-icon.png';
import GameOver from './GameOver';
import StartMessage from './StartMessage';
import Win from './Win';

const Zombies = ({
  soldVaccine,
  setSoldVaccine,
  isTutorial,
  setIsTutorial,
}) => {
  const [zombies, setZombies] = useState(50);
  const [startMessage, setStartMessage] = useState(false);
  const [winMessage, setWinMessage] = useState(false);

  useEffect(() => {
    const countAndIcon = document.querySelector(
      '.zombie-count-container .count-and-icon'
    );

    if (!isTutorial) {
      countAndIcon.style.justifyContent = 'flex-start';
      const interval = setInterval(() => {
        if (zombies < 300000000) {
          setZombies(prev => (prev += 11111));
        } else {
          setZombies(300000000);
          clearInterval(interval);
        }
      }, 20);

      if (winMessage) {
        clearInterval(interval);
        setZombies(0);
      }

      return () => clearInterval(interval);
    }
  }, [isTutorial, zombies, winMessage]);

  const addCommasToNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const useVaccine = () => {
    const parentDiv = document.querySelector('.decrease-animation');
    const minusZombieDiv = document.createElement('div');
    minusZombieDiv.classList.add('minus-zombie');

    if (zombies - soldVaccine > 0) {
      // Decrease Animation
      minusZombieDiv.innerHTML = `
    <img src=${zombieIcon} alt="zombie icon" />
    <p>-${addCommasToNumber(soldVaccine)}</p>
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
    <p>-${addCommasToNumber(zombies)}</p>
    `;
      parentDiv.appendChild(minusZombieDiv);
      setTimeout(() => {
        minusZombieDiv.remove();
      }, 1000);

      setSoldVaccine(prev => prev - zombies);
      setZombies(0);
      setStartMessage(true);
    }

    // Win Message
    if (!isTutorial && zombies - soldVaccine <= 0) setWinMessage(true);
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
      <button onMouseUp={useVaccine}>
        USE VACCINE ({addCommasToNumber(soldVaccine)})
      </button>
      <StartMessage
        setIsTutorial={setIsTutorial}
        startMessage={startMessage}
        setStartMessage={setStartMessage}
      />
      {zombies === 300000000 && <GameOver />}
      {winMessage && <Win />}
    </div>
  );
};

export default Zombies;
