import React, { useEffect, useState } from 'react';
import feministBtn from '../assets/images/feminist-btn.png';

const FeministMenu = ({
  money,
  setMoney,
  clickFeminist,
  setClickFeminist,
  setFeministVps,
}) => {
  const [price, setPrice] = useState(3200);
  const [count, setCount] = useState(0);
  const [vps, setVps] = useState(350);

  useEffect(() => {
    setFeministVps(vps * count);
  }, [setFeministVps, vps, count]);

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
    const helperTitle = document.querySelector('.FeministMenu .title');
    const helperDescription = document.querySelector(
      '.FeministMenu .description'
    );
    const upgradeBtn = document.querySelector('.FeministMenu .upgrade');

    helperTitle.innerText = 'AOC';
    helperDescription.innerText =
      'A superior being who does not even need to plan parenthood';
    upgradeBtn.classList.add('hide');

    setVps(1240);
  };

  return (
    <div
      className="FeministMenu hire-menu"
      style={clickFeminist ? { left: '0' } : { left: '-100vw' }}
    >
      <h4>
        <span className="title">Feminist</span> (x {count})
      </h4>
      <h5>{addCommasToNumber(vps)} vps</h5>
      <img src={feministBtn} alt="feminist icon" />
      <p className="description">Womankind who plans parenthood well</p>
      <div className="btn-container">
        <button
          style={money < price ? { opacity: '0.4' } : { opacity: '1' }}
          onMouseUp={purchase}
        >
          ${addCommasToNumber(price)}
        </button>

        <button onClick={() => setClickFeminist(false)}>EXIT</button>
      </div>
      {count >= 5 && (
        <button onMouseUp={upgrade} className="upgrade">
          UPGRADE
        </button>
      )}
    </div>
  );
};

export default FeministMenu;
