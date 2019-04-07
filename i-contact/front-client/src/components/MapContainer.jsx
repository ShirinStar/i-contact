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
      currentLatLng: {
            lat: 0,
            lng: 0
      },
    }
  }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.setState({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          error => console.log(error)
        );
      }

  render() {
    return (
      <Map google={this.props.google}
          initialCenter={this.state.currentLatLng}
          zoom={12}
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
