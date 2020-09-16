import React from 'react';

const HireTutorial = () => {
  const hideHint = () => {
    const hireHintDiv = document.querySelector('.hire-hint');
    hireHintDiv.classList.add('hide');
  };
  return (
    <div className="HireTutorial">
      <div className="hire-hint">
        <p>
          <i className="fas fa-arrow-down"></i> Hire the world's greatest
          helpers <i className="fas fa-arrow-down"></i>
        </p>
        <button onMouseUp={hideHint}>OK</button>
      </div>
    </div>
  );
};

export default HireTutorial;
