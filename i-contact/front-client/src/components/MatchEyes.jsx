import React, { Component } from 'react';
import geolib from 'geolib';

class MatchEyes extends Component {
    constructor(props){
      super(props);
      this.state = {
        closeUsers: null
      }
    this.findCloseUsers = this.findCloseUsers.bind(this)
    }

    findCloseUsers(){
      const closeUsers = this.props.mapUser.filter((user, index)=> {
        const lng = this.props.mapUser.lng
        const lat = this. props.mapUser.lat
        const usersDistance = geolib.getDistance(
          {
            latitude: this.props.currentPosition.lat,
            longitude: this.props.currentPosition.lng
          },
          {latitude: lat, longitude: lng}
        );
        console.log(usersDistance);
        return usersDistance < 500;

      });
      console.log(closeUsers);
      this.setState({
        closeUsers: closeUsers
      })
    }

  componentDidMount(){
      this.findCloseUsers();
    }

  render(){
    console.log('from matchEyes', this.props.currentPosition);
  return(
    <div></div>
      )
    }
}
export default MatchEyes
