import React from 'react';

const UpdateForm = (props) => {
  const { name, email } = props.currentUser
  return(
    <div className="edit-page">
      <form className="edit-form" onSubmit={props.onSubmit}>
       <div className="edit">
         <input
         placeholder="Name"
         className="input-edit"
         autoComplete="off"
         type="text"
         onChange={props.handleChange}
         id="name"
         name="name"
         value={name} />
       </div>

       <div className="edit">
          <input
          placeholder="Email"
          className="input-edit"
          autoComplete="off"
          type="text"
          onChange={props.handleChange}
          id="email"
          name="email"
          value={email} />
          <button className='updateBtn' onClick={props.handleUpdate}>Update</button>
        </div>


       </form>
    </div>
  )
};

export default UpdateForm;
