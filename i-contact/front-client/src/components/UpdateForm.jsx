import React from 'react';

const UpdateForm = (props) => {
  const { name, email } = props.currentUser
  return(
    <div className="edit-page">
      <form className="edit-form" onSubmit={props.onSubmit}>
       <div className="edit">
         <label>Name</label>
         <input
         className="input-edit"
         autoComplete="off"
         type="text"
         onChange={props.handleChange}
         id="name"
         name="name"
         value={name} />
       </div>

       <div className="edit">
          <label>Email</label>
          <input
          className="input-edit"
          autoComplete="off"
          type="text"
          onChange={props.handleChange}
          id="email"
          name="email"
          value={email} />
        </div>

        <button className='updateBtn' onClick={props.handleUpdate}>Update</button>
       </form>
    </div>
  )
};

export default UpdateForm;
