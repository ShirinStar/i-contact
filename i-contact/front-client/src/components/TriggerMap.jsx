import React, { Component } from 'react'
import MapContainer from './MapContainer';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

function TriggerMap(){
  return (
      <div>
        <h1>look for human eye contact</h1>
        <Link to='/map' onClick={() => this.props.history.push('/map')}>
          <div className='triggerEye'>
            <img src='https://i.imgur.com/yXLZt4q.png' width='480' height='600' alt=''/>
          </div>
        </Link>
        <Route exact path='/map' render={(props) => (
          <MapContainer/> )}
          />
    </div>
    )
  }

export default withRouter(TriggerMap)
