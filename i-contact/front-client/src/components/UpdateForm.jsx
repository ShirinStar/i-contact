import React from 'react';

const UpdateForm = (props) => {
  const { name, email } = props.currentUser
  return(
    <div className="reg-page">
       <form className="register-form" onSubmit={props.onSubmit}>
       <div className="register">
       <label>Name</label>
       <input
       className="input-reg"
       autoComplete="off"
       type="text"
       onChange={props.handleChange}
       id="name"
       name="name"
       value={name} />
       </div>

       <div className="register">
        <label>Email</label>
        <input
        className="input-reg"
        autoComplete="off"
        type="text"
        onChange={props.handleChange}
        id="email"
        name="email"
        value={email} />
        </div>

        <button onClick={props.handleUpdate}>Update</button>
       </form>
    </div>
  )
};

export default UpdateForm;
