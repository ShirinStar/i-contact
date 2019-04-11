import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Link, Route} from 'react-router-dom';
import { userLocation, getLocations } from '../services/api-helper';
import LocationShowPage from './LocationShowPage';
const GOOGLE_API_KEY= process.env.REACT_APP_GOOGLE_API_KEY;
const styles = require('./mapStyle.json')

export class MapContainer extends Component {
  constructor(){
    super();
    this.state = {
      //currentuser.id
      currentPosition: {
        lat: '',
        lng: '',
      },
      location:{
        location:{},
        users:[]
      },
      showingInfoWindow: false,
      activeMarker: {},
      //selectplaces here function as users
      selectedPlace: {},
    }
  }

  // Callback function to setState in App from Line Action Cable
  updateAppStateLocation = (newLocation) => {
    console.log('updateAppStateLocation: ', this.state.location)
    this.setState({
      location: {
        location: newLocation.location,
        users: newLocation.users
      }
    })
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


//updating location every 10 sec
  async componentDidMount() {
      await setInterval(() => {
        navigator.geolocation.getCurrentPosition(
          position => {
            console.log(position);
            this.setState({
              currentPosition: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              }
            });
            const data = userLocation(this.state.currentPosition, this.props.currentUser.id)
          },
          error => console.log(error)
        );
      }, 10000);
    }

  render() {
    let icon = {
        url: "https://i.imgur.com/Wt5NZiA.png",
        scaledSize: new this.props.google.maps.Size(80, 80), // scaled size
        };
    return (
      <div>
      <Map className='map' google={this.props.google}
      //i need to check how to add a bounds to center multi positions
          center={this.state.currentPosition}
          zoom={16}
          styles={styles}
          onClick={this.onMapClicked}>

        <Marker
          position={this.state.currentPosition}
          onClick={this.onMarkerClick}
      //change here to the name of the user later + location
          name={'User name and user ratings'}
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

      <Route path="/locations" render={(props)=>(
      <LocationShowPage
      {...props}
      data-cableApp={this.props.cableApp}
      data-updateApp={this.updateAppStateLine}
      data-locationData={this.state.locationData}
      data-getLocationData={this.getLocationData}
      getLocationData={this.getLocationData}
      locationData={this.state.location}
      />
      )}/>
      </div>
    );
  }
}

  //the fancy loading goes here...

  export default GoogleApiWrapper({
    apiKey: (GOOGLE_API_KEY)
  })(MapContainer)
