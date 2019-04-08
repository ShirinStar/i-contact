import React from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import LoginForm from './LoginForm';

const Nav = (props) => {
  const { isEdit, currentUser } = props;
  return(
    <div>
      <h3>i.contact app</h3>
      {this.props.isEdit ? <LoginForm /> : <h2>hey {currentUser.name}</h2>}
      <button onClick={() => props.onEdit(currentUser)}>Edit profile </button>
      <button className="logout" onClick={props.onClick}>Logout</button>
    </div>
  )
}

export default withRouter(Nav)
