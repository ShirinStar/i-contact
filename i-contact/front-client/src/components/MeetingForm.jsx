import React from 'react';
const sgeo = require('sgeo');


const MeetingForm = (props) => {

  return(
    <div className='MeetingForm'>
    <div>
    <h2 className='title'> {props.currentUser.name}!</h2>
    <p>you have been invited for a human eye contact ◑ ◐ </p>
    { props.distance? <p>they are only {props.distance} meter from you</p>: <></>}
    <p>would you come to the new near by marked spot?</p>

       <div className='yesNo'>
       <button className='yes'
         onClick={props.handleYes}
         type="submit">
         yes!
       </button>
       <button className='no'
         onClick={props.handleNo}
         type="submit">
         no
       </button>
       </div>
       </div>
    </div>
  )

}

export default MeetingForm;
