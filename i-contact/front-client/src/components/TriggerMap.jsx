import React, { Component } from 'react'
import MapContainer from './MapContainer';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

function TriggerMap(props){
  return (
      <div>
        <h1>look for human eye contact</h1>
        <button onClick={props.triggerMap}>
          <div className='triggerEye'>
            <img src='https://i.imgur.com/yXLZt4q.png' width='480' height='600' alt=''/>
          </div>
        </button>

    </div>
    )
  }

export default withRouter(TriggerMap)
