import React, { useEffect, useState } from 'react';

const AnimalProgressBar = ({ setVaccine, animalVps }) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  useEffect(() => {
    const animalProgress = document.getElementById('animal-progress');
    const interval = setInterval(() => {
      if (animalVps) {
        if (currentProgress < 100) {
          setCurrentProgress(prev => (prev += 2.5));
        } else {
          setVaccine(prev => (prev += animalVps));
          setCurrentProgress(0);
        }
        animalProgress.style.width = `${currentProgress}%`;
      } else clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [setVaccine, animalVps, currentProgress]);

  return (
    <div className="AnimalProgressBar">
      <div className="empty-bar">
        <div className="progress-bar" id="animal-progress"></div>
      </div>
    </div>
  );
};

export default AnimalProgressBar;
