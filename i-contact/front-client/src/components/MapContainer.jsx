import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Link, Route} from 'react-router-dom';
import { userLocation, getLocations, createMeeting } from '../services/api-helper';
import geolib from 'geolib';
const GOOGLE_API_KEY= process.env.REACT_APP_GOOGLE_API_KEY;
const styles = require('./mapStyle.json')

export class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      usersMarkers:[{}],
      showingInfoWindow: false,
      activeMarker: {},
      //selectplaces here function as users
      selectedPlace: {}
    }
  this.matchDistance = this.matchDistance.bind(this)
  }

  // Callback function to setState in App from Line Action Cable
  // updateAppStateLocation = (newLocation) => {
  //   console.log('updateAppStateLocation: ', this.state.location)
  //   this.setState({
  //     location: {
  //       location: newLocation.location,
  //       users: newLocation.users
  //     }
  //   })
  // }

  matchDistance(props) {

    console.log(this.props.currentPosition.lat);
  }

onMarkerClick =  async (props, marker, e) => {
    console.log('markerclicked!');
    const newMeeting = await createMeeting();
  }
  // this.setState({
  //   selectedPlace: props,
  //   activeMarker: marker,
  //   showingInfoWindow: true
  // });

  onMapClicked = (props) => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
};

//updating location every 10 sec
  componentDidMount() {
      const interval = setInterval(() => {
        navigator.geolocation.getCurrentPosition(
          position => {
            //sending my geo to the backend
            const data = userLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude},
              this.props.currentUser.id)
          },
          error => console.log(error)
        );
      }, 10000)
      this.setState({
        geoInterval: interval
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.geoInterval);
  }

  render() {
    let icon = {
        url: "https://i.imgur.com/Wt5NZiA.png",
        scaledSize: new this.props.google.maps.Size(80, 80), // scaled size
        };
    return (
      <div>
      <Map className='map' google={this.props.google}
          centerAroundCurrentLocation={true}
          initialCenter={this.props.currentPosition}
          zoom={16}
          styles={styles}
          style={{width: '50wh', height: '50vh', marginTop: '5px'}}
          onClick={this.onMapClicked}>
        {
          Object.keys(this.props.mapUser).map(eye => (
            <Marker
              position={this.props.mapUser[eye]}
              onClick={this.onMarkerClick}
          //change here to the name of the user later + location
              name={'User name and user ratings'}
              icon={icon}/>
          ))
        }

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

      </div>
    );
  }
}

  //the fancy loading goes here...

  export default GoogleApiWrapper({
    apiKey: (GOOGLE_API_KEY)
  })(MapContainer)


  // <Route path="/locations" render={(props)=>(
  // <LocationShowPage
  // {...props}
  // data-cableApp={this.props.cableApp}
  // data-updateApp={this.updateAppStateLine}
  // data-locationData={this.state.locationData}
  // data-getLocationData={this.getLocationData}
  // getLocationData={this.getLocationData}
  // locationData={this.state.location}
  // />
  // )}/>
