import React, { useEffect, useState } from 'react';
import vaccineIcon from '../assets/images/vaccine.png';
import moneyIcon from '../assets/images/money.png';

const Parameters = ({
  money,
  setMoney,
  vaccine,
  setVaccine,
  setSoldVaccine,
  totalVps,
}) => {
  const [countingVaccine, setCountingVaccine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (vaccine - countingVaccine > 0 && vaccine - countingVaccine < 100) {
        setCountingVaccine(prev => (prev += 1));
      } else if (vaccine - countingVaccine > 0) {
        setCountingVaccine(
          prev => (prev += Math.floor((vaccine - countingVaccine) / 48))
        );
      } else if (vaccine < countingVaccine) {
        setCountingVaccine(vaccine);
      } else {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [vaccine, countingVaccine]);

  const sell = () => {
    const parentDiv = document.querySelector('.plus-money-animation');
    const plusMoneyP = document.createElement('p');
    plusMoneyP.classList.add('plus-money');
    plusMoneyP.innerText = `+${countingVaccine}`;

    parentDiv.appendChild(plusMoneyP);
    setTimeout(() => {
      plusMoneyP.remove();
    }, 1000);

    setSoldVaccine(prev => prev + countingVaccine);
    setMoney(prev => prev + countingVaccine);
    setVaccine(prev => prev - countingVaccine);
    setCountingVaccine(prev => prev - prev);
  };

  const addCommasToNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="Parameters">
      <div className="money-count-container">
        <img src={moneyIcon} alt="money icon" />
        <p>{addCommasToNumber(money)}</p>
        <div className="plus-money-animation"></div>
      </div>
      <div className="vaccine-count-container">
        <div className="count-and-icon">
          <img src={vaccineIcon} alt="vaccine icon" />
          <p>{addCommasToNumber(countingVaccine)}</p>
        </div>
        <button onClick={sell}>SELL</button>
      </div>
      <h5>{addCommasToNumber(totalVps)} vps (vaccine per second)</h5>
    </div>
  );
};

export default Parameters;
