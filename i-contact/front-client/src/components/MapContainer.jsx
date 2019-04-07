import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const GOOGLE_API_KEY= process.env.REACT_APP_GOOGLE_API_KEY;

export class MapContainer extends Component {
  constructor(){
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      currentPosition: {
        lat: '',
        lng: '',
      }
    }
  }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
          position => {
          console.log(position)
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
    return (
      <Map google={this.props.google}
          center={this.state.currentPosition}
          zoom={16}
          onClick={this.onMapClicked} >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

  export default GoogleApiWrapper({
    apiKey: (GOOGLE_API_KEY)
  })(MapContainer)
