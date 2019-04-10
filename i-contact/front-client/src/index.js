import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import actionCable from 'actioncable'
const CableApp = {}
CableApp.cable = actionCable.createConsumer(`ws://${window.location.hostname}:3000/cable`)


ReactDOM.render(
  <Router>
  <App cableApp={CableApp} />
  </Router>,
  document.getElementById('root'));
