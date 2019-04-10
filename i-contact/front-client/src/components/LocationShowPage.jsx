import React from 'react'
import LocationWebSocket from './LocationWebSocket';

class LocationShowPage extends React.Component {
// Add <LineWebSocket/> and props
  render(){
    return (

       <LocationWebSocket
         data-cableApp={this.props['data-cableApp']}
         data-updateApp={this.props['data-updateApp']}
         data-locationData={this.props['data-locationData']}
         data-getLocationData={this.props['data-getLocationData']}
       />
    )
  }
}

export default LocationShowPage
