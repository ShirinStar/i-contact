import React from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

function HomeScreen(){
  return(
    <div>
      <div className='aroundPerson'>
        <img className='imgPerson' src='https://i.ibb.co/k1Sk81Q/manHome.png' alt='' />
      </div>
      <footer className='footer'>
        <a className='footer-link' href='https://shirin.works/'> shirin anlen |</a>
        <a className='footer-link' href='https://github.com/ShirinStar/i-contact'> Github repository</a>
      </footer>
    </div>
  )
}

export default HomeScreen
