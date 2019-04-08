import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LoginForm extends Component {

  // async componentDidMount() {
  //   const token = await localStorage.getItem('token');
  //   token && this.props.history.push('/');
  // }

  render() {
    return(
      <div className="login">
        <form onSubmit={this.props.onSubmit}>
          <input
          autoComplete="off"
          className="input-login"
          type="text"
          onChange={this.props.handleChange}
          id="email"
          name="email"
          value={this.props.email}
          placeholder="Email"/>
          <input
          autoComplete="off"
          className="input-login"
          type="password_diagest"
          onChange={this.props.handleChange}
          id="password_diagest"
          name="password_diagest"
          value={this.props.password_diagest}
          placeholder="Password"/>

          <button
          className='button-login'
          onClick={this.props.handleSubmit}
          type="submit">
          {this.props.buttonText}
          </button>

          </form>
      </div>
    )
  }
};

export default LoginForm;
