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
          type="password"
          onChange={this.props.handleChange}
          id="password"
          name="password"
          value={this.props.password}
          placeholder="Password"/>

          <button
          className='button-login'
          onClick={this.props.handleSubmit}
          type="submit">
          {this.props.buttonText}
          </button>

          </form>

        <Link className='newEye' to="/register">new eye</Link>
      </div>
    )
  }
};

export default LoginForm;
