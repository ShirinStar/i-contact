import React from 'react';

const MeetingForm = (props) => {
  return(
    <div>
    <p>{currentUser.name}</p>
    //here i need to add location info.... ?
    <p>are you meeting?</p>

      <form onSubmit={props.onSubmit}>
       <div>
         <input
         type="radio"
         onChange={props.handleChange}
         id="yes"
         name="name"
         value="yes" />
         <label for="yes"> yes</label>
       </div>

      <div>
       <input
       type="radio"
       onChange={props.handleChange}
       id="no"
       name="name"
       value="no" />
       <label for="no"> no</label>
     </div>
      </form>
    </div>
  )
};

export default MeetingForm;
