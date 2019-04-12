import React from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

function HomeScreen(){
  return(
    <div>
    <div className='aroundPerson'>
      <img className='imgPerson' src='https://i.ibb.co/k1Sk81Q/manHome.png' alt='' />
    </div>
    <Link to='/about' className='about'> about</Link>
    </div>
  )
}

export default HomeScreen
