import React, { useEffect, useState } from 'react';
import workerBtn from '../assets/images/worker-btn.png';

const WorkerMenu = ({
  money,
  setMoney,
  clickWorker,
  setClickWorker,
  setWorkerVps,
}) => {
  const [price, setPrice] = useState(10);
  const [count, setCount] = useState(0);
  const [vps, setVps] = useState(3);

  useEffect(() => {
    setWorkerVps(vps * count);
  }, [setWorkerVps, vps, count]);

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
    const helperTitle = document.querySelector('.WorkerMenu .title');
    const helperDescription = document.querySelector(
      '.WorkerMenu .description'
    );
    const upgradeBtn = document.querySelector('.WorkerMenu .upgrade');

    helperTitle.innerText = 'Corrupted Worker';
    helperDescription.innerText =
      'A super worker who thinks in terms of science';
    upgradeBtn.classList.add('hide');

    setVps(720);
  };

  return (
    <div
      className="WorkerMenu hire-menu"
      style={clickWorker ? { left: '0' } : { left: '-100vw' }}
    >
      <h4>
        <span className="title">Worker</span> (x {count})
      </h4>
      <h5>{addCommasToNumber(vps)} vps</h5>
      <img src={workerBtn} alt="worker icon" />
      <p className="description">A person with a scientific mentality</p>
      <div className="btn-container">
        <button
          style={money < price ? { opacity: '0.4' } : { opacity: '1' }}
          onMouseUp={purchase}
        >
          ${addCommasToNumber(price)}
        </button>

        <button onClick={() => setClickWorker(false)}>EXIT</button>
      </div>
      {count >= 100 && (
        <button onMouseUp={upgrade} className="upgrade">
          UPGRADE
        </button>
      )}
    </div>
  );
};

export default WorkerMenu;
