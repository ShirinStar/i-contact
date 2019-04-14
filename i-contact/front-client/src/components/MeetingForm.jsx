import React from 'react';

const MeetingForm = (props) => {
  return(
    <div>
    <h2>hey there, {props.currentUser.name}</h2>
    <p>you have been invited for a human eye contact!</p>
    <p>would you come to the new near by marked spot?</p>

       <div>
       <button
         onClick={props.handleYes}
         type="submit">
         yes!
       </button>
       <button
         onClick={props.handleNo}
         type="submit">
         no
       </button>
       </div>
    </div>
  )
};

export default MeetingForm;
