import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import fetchMap from './services/api-helper';
import MapContainer from './components/MapContainer'

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
        <h1>i.contact app</h1>
        <MapContainer />
      </div>
    );
  }
}

export default App;
