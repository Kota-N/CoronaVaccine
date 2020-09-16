import React, { useEffect, useState } from 'react';

const FeministProgressBar = ({ setVaccine, feministVps }) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  useEffect(() => {
    const feministProgress = document.getElementById('feminist-progress');
    const interval = setInterval(() => {
      if (feministVps) {
        if (currentProgress < 100) {
          setCurrentProgress(prev => (prev += 2.5));
        } else {
          setVaccine(prev => (prev += feministVps));
          setCurrentProgress(0);
        }
        feministProgress.style.width = `${currentProgress}%`;
      } else clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [setVaccine, feministVps, currentProgress]);

  return (
    <div className="FeministProgressBar">
      <div className="empty-bar">
        <div className="progress-bar" id="feminist-progress"></div>
      </div>
    </div>
  );
};

export default FeministProgressBar;
