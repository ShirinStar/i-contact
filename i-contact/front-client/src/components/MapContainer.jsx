import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const GOOGLE_API_KEY= process.env.REACT_APP_GOOGLE_API_KEY;
const styles = require('./mapStyle.json')

export class MapContainer extends Component {
  constructor(){
    super();
    this.state = {
      currentPosition: {
        lat: '',
        lng: '',
      },
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onMapClicked = (props) => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
};

//i need to add to this setInterval to update position every 30sec or so.
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.setState({
              currentPosition: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              }
            });
          },
          error => console.log(error)
        );
      }

  render() {
    let icon = {
        url: "https://i.imgur.com/Wt5NZiA.png", // url
        scaledSize: new this.props.google.maps.Size(80, 80), // scaled size
        };
    return (
      <Map className='map' google={this.props.google}
      //i need to check how to add a bounds to center multi positions
          center={this.state.currentPosition}
          zoom={16}
          defaultOptions={{
          styles: styles
          }}
          onClick={this.onMapClicked} >

        <Marker
          position={this.state.currentPosition}
          onClick={this.onMarkerClick}
      //change here to the name of the user later + location ?
          name={'User name'}
          icon={icon}/>

        <InfoWindow
          marker={this.state.activeMarker}
          onOpen={this.windowHasOpened}
          onClose={this.windowHasClosed}
          visible={this.state.showingInfoWindow}>
            <div>
              <h2 className='userMarker'>{this.state.selectedPlace.name}</h2>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

  //the fancy loading goes here...

  export default GoogleApiWrapper({
    apiKey: (GOOGLE_API_KEY)
  })(MapContainer)
