import React from 'react'

class LocationWebSocket extends React.Component {

componentDidMount() {
    this.props['data-getLocationData'](window.location.href.match(/\d+$/)[0])
    this.props['data-cableApp'].location = this.props['data-cableApp'].cable.subscriptions.create({channel: "LocationsChannel",
    markers: window.location.href.match(/\d+$/)[0]}, {
      received: (newLocation) => {
        console.log(newLocation)
        this.props['data-updateApp'](newLocation)
      }
    })
  }
render() {
    return(
      <div />
    )
  }
}
export default LocationWebSocket
