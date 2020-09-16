import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './css/Zombies.css';
import './css/Parameters.css';
import './css/Clicker.css';
import './css/HireNav.css';
import './css/hire-menu.css';
import './css/progress-bar.css';
import './css/Tutorial.css';
import './css/StartMessage.css';
import './css/HireTutorial.css';
import './css/ClickerExp.css';
import './css/GameOver.css';
import './css/Win.css';
import './css/media.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
