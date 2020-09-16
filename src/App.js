import React, { useEffect, useState } from 'react';
import './App.css';
import Zombies from './components/Zombies';
import Parameters from './components/Parameters';
import Clicker from './components/Clicker';
import HireNav from './components/HireNav';
import Tutorial from './components/Tutorial';
import HireTutorial from './components/HireTutorial';

function App() {
  const [money, setMoney] = useState(0);
  const [vaccine, setVaccine] = useState(0);
  const [soldVaccine, setSoldVaccine] = useState(0);

  // Total vps of each helper
  const [workerVps, setWorkerVps] = useState(0);
  const [feministVps, setFeministVps] = useState(0);
  const [animalVps, setAnimalVps] = useState(0);
  const [totalVps, setTotalVps] = useState(0);

  const [isTutorial, setIsTutorial] = useState(true);

  useEffect(() => {
    setTotalVps(workerVps + feministVps + animalVps);
  }, [workerVps, feministVps, animalVps]);

  return (
    <div className="App">
      <div className="upper-line"></div>
      <div className="bottom-line"></div>
      <Zombies
        soldVaccine={soldVaccine}
        setSoldVaccine={setSoldVaccine}
        isTutorial={isTutorial}
        setIsTutorial={setIsTutorial}
      />
      <Parameters
        money={money}
        setMoney={setMoney}
        vaccine={vaccine}
        setVaccine={setVaccine}
        setSoldVaccine={setSoldVaccine}
        totalVps={totalVps}
      />
      <Clicker setVaccine={setVaccine} isTutorial={isTutorial} />
      {!isTutorial && (
        <HireNav
          money={money}
          setMoney={setMoney}
          setVaccine={setVaccine}
          workerVps={workerVps}
          setWorkerVps={setWorkerVps}
          feministVps={feministVps}
          setFeministVps={setFeministVps}
          animalVps={animalVps}
          setAnimalVps={setAnimalVps}
        />
      )}
      {isTutorial && (
        <Tutorial money={money} vaccine={vaccine} soldVaccine={soldVaccine} />
      )}
      {!isTutorial && <HireTutorial />}
    </div>
  );
}

export default App;
