import React, { Component } from 'react'
import MapContainer from './MapContainer';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

function TriggerMap(props){
  return (
      <div>
        <h1 className='lookfor'>look for human eye contact</h1>
        <button className='triggerBtn' onClick={props.triggerMap}>
          <div className='triggerEye'>
            <img className='bigEye' src='https://i.imgur.com/yXLZt4q.png' width='480' height='600' alt=''/>
          </div>
        </button>

    </div>
    )
  }

export default withRouter(TriggerMap)
