import React, { useEffect, useState } from 'react';
import animalBtn from '../assets/images/animal-btn.png';

const AnimalMenu = ({
  money,
  setMoney,
  clickAnimal,
  setClickAnimal,
  setAnimalVps,
}) => {
  const [price, setPrice] = useState(22000);
  const [count, setCount] = useState(0);
  const [vps, setVps] = useState(2800);

  useEffect(() => {
    setAnimalVps(vps * count);
  }, [setAnimalVps, vps, count]);

  const purchase = () => {
    if (money >= price) {
      setCount(prev => (prev += 1));
      setMoney(prev => prev - price);
      setPrice(prev => prev + Math.round(prev / 10));
    }
  };

  const addCommasToNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const upgrade = () => {
    const helperTitle = document.querySelector('.AnimalMenu .title');
    const helperDescription = document.querySelector(
      '.AnimalMenu .description'
    );
    const upgradeBtn = document.querySelector('.AnimalMenu .upgrade');

    helperTitle.innerText = 'Killer Bear';
    helperDescription.innerText =
      'A bear protected by animal rights which can freely eat humans';
    upgradeBtn.classList.add('hide');

    setVps(8440);
  };

  return (
    <div
      className="AnimalMenu hire-menu"
      style={clickAnimal ? { left: '0' } : { left: '-100vw' }}
    >
      <h4>
        <span className="title">Animal Advocate</span> (x {count})
      </h4>
      <h5>{addCommasToNumber(vps)} vps</h5>
      <img src={animalBtn} alt="animal advocate icon" />
      <p className="description">
        An animal lover who saves animals while children are dying in the world
      </p>
      <div className="btn-container">
        <button
          style={money < price ? { opacity: '0.4' } : { opacity: '1' }}
          onMouseUp={purchase}
        >
          ${addCommasToNumber(price)}
        </button>

        <button onClick={() => setClickAnimal(false)}>EXIT</button>
      </div>
      {count >= 5 && (
        <button onMouseUp={upgrade} className="upgrade">
          UPGRADE
        </button>
      )}
    </div>
  );
};

export default AnimalMenu;
