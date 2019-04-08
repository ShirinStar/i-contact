import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { loginUser, registerUser} from './services/api-helper';
import TriggerMap from './components/TriggerMap';
import HomeScreen from './components/HomeScreen';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


class App extends Component {
constructor() {
  super();
  this.state = {
    mapData: '',
    registerFormData: {
        email: '',
        password: '',
        name: ''
      },
    loginData: {
      email: '',
      password: ''
    },
  }
  this.handleLogin = this.handleLogin.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.handleRegister = this.handleRegister.bind(this)
}

handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value
      },
      loginData: {
        ...prevState.loginData,
        [name]: value
      }
    }));
  }

  async handleRegister(e) {
    e.preventDefault();
    // const data = await registerUser(this.state.registerFormData)
    // this.setState({
    //   registerFormData: {
    //     email: '',
    //     password: '',
    //     name: ''
    //   }
    // })
    this.props.history.push('/trigger');
  };

  async handleLogin(e) {
    e.preventDefault();
    // const data = await loginUser(this.state.loginData)
    // console.log(data)
    // data === '' ? alert('Invalid Email or Password- try again') :
    //   this.setState(prevState => ({
    //   loginData: {
    //     email: '',
    //     password: '',
    //   },
    // }))
    this.props.history.push('/trigger');
  }


async componentDidMount(){
}

  render() {
    return (
      <div className="App">
      <div>
        <nav>
          <h1>i.contact app</h1>
          <Link to='/login'> returning eye </Link>
          <Link to='/register'> new eye </Link>
        </nav>

        <HomeScreen />

        <Route exact path='/login' render={(props) => (
          <LoginForm
          {...props}
          buttonText="start humanizing"
          handleChange={this.handleChange}
          email={this.state.loginData.email}
          password={this.state.loginData.password}
          handleSubmit={this.handleLogin}
          onSubmit={this.handleLogin}
          />
        )}/>

        <Route exact path='/register' render={(props) => (
        <RegisterForm
          {...props}
          buttonText="start humanizing"
          handleChange={this.handleChange}
          email={this.state.registerFormData.email}
          password={this.state.registerFormData.password}
          name={this.state.registerFormData.name}
          handleSubmit={this.handleRegister}
        />
      )}/>

        <TriggerMap/>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
