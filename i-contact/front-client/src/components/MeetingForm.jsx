import React from 'react';

const MeetingForm = (props) => {
  return(
    <div className='MeetingForm'>
    <div>
    <h2 className='title'> yo {props.currentUser.name}</h2>
    <p>you have been invited for a human eye contact!</p>
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
};

export default MeetingForm;
