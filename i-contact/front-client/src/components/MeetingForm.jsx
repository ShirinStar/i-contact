import React from 'react';

const MeetingForm = (props) => {
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
         value={props.name} />
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
        value={props.email} />
      </div>

      <div className="register">
        <label>Password</label>
        <input
        className="input-reg"
        autoComplete="off"
        type="password"
        onChange={props.handleChange}
        id="password"
        name="password"
        value={props.password} />
      </div>

      <button className='button-reg'
        onClick={props.handleSubmit}
        type="submit">
        {props.buttonText}
      </button>
      </form>
    </div>
  )
};

export default RegisterForm;
