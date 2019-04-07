import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import fetchMap from './services/api-helper';
import TriggerMap from './components/TriggerMap';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class App extends Component {
constructor() {
  super();
  this.state = {
    mapData: ''
  }
}


async componentDidMount(){
}

  render() {
    return (
      <div className="App">
      <div>
      <Link to='/' />
        <h1>i.contact app</h1>

        <TriggerMap  />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
