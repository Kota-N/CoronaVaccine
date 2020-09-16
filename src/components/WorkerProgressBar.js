import React, { useEffect, useState } from 'react';

const WorkerProgressBar = ({ setVaccine, workerVps }) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  useEffect(() => {
    const workerProgress = document.getElementById('worker-progress');
    const interval = setInterval(() => {
      if (workerVps) {
        if (currentProgress < 100) {
          setCurrentProgress(prev => (prev += 2.5));
        } else {
          setVaccine(prev => (prev += workerVps));
          setCurrentProgress(0);
        }
        workerProgress.style.width = `${currentProgress}%`;
      } else clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [setVaccine, workerVps, currentProgress]);

  return (
    <div className="WorkerProgressBar">
      <div className="empty-bar">
        <div className="progress-bar" id="worker-progress"></div>
      </div>
    </div>
  );
};

export default WorkerProgressBar;
