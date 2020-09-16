import React, { useState } from 'react';
import workerBtn from '../assets/images/worker-btn.png';
import feministBtn from '../assets/images/feminist-btn.png';
import animalBtn from '../assets/images/animal-btn.png';

import WorkerProgressBar from './WorkerProgressBar';
import FeministProgressBar from './FeministProgressBar';
import AnimalProgressBar from './AnimalProgressBar';
import WorkerMenu from './WorkerMenu';
import FeministMenu from './FeministMenu';
import AnimalMenu from './AnimalMenu';

const HireNav = ({
  money,
  setMoney,
  setVaccine,
  workerVps,
  setWorkerVps,
  feministVps,
  setFeministVps,
  animalVps,
  setAnimalVps,
}) => {
  const [clickWorker, setClickWorker] = useState(false);
  const [clickFeminist, setClickFeminist] = useState(false);
  const [clickAnimal, setClickAnimal] = useState(false);

  return (
    <div className="HireNav">
      <div className="helper-container">
        <div className="helper" onClick={() => setClickWorker(true)}>
          <img src={workerBtn} alt="worker button" />
          <WorkerProgressBar setVaccine={setVaccine} workerVps={workerVps} />
        </div>
        <div className="helper" onClick={() => setClickFeminist(true)}>
          <img src={feministBtn} alt="feminist button" />
          <FeministProgressBar
            setVaccine={setVaccine}
            feministVps={feministVps}
          />
        </div>
        <div className="helper" onClick={() => setClickAnimal(true)}>
          <img src={animalBtn} alt="animal advocate button" />
          <AnimalProgressBar setVaccine={setVaccine} animalVps={animalVps} />
        </div>
      </div>
      <WorkerMenu
        money={money}
        setMoney={setMoney}
        clickWorker={clickWorker}
        setClickWorker={setClickWorker}
        setWorkerVps={setWorkerVps}
      />
      <FeministMenu
        money={money}
        setMoney={setMoney}
        clickFeminist={clickFeminist}
        setClickFeminist={setClickFeminist}
        setFeministVps={setFeministVps}
      />
      <AnimalMenu
        money={money}
        setMoney={setMoney}
        clickAnimal={clickAnimal}
        setClickAnimal={setClickAnimal}
        setAnimalVps={setAnimalVps}
      />
    </div>
  );
};

export default HireNav;
