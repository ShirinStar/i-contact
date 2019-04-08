import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { loginUser, registerUser, updateUser, getUser, deleteUser } from './services/api-helper';
import TriggerMap from './components/TriggerMap';
import HomeScreen from './components/HomeScreen';
import LoginForm from './components/LoginForm';
import UpdateForm from './components/UpdateForm';
import RegisterForm from './components/RegisterForm';
import MapContainer from './components/MapContainer';

class App extends Component {
constructor() {
  super();
  this.state = {
    mapData: '',
    formData: {
      email: '',
      password_diagest: '',
      name: ''
      },
    currentUser: {
      email:'',
      name:'',
      id:''
    },
    isEdit: false
  }
  this.handleLogin = this.handleLogin.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.handleRegister = this.handleRegister.bind(this)
  this.triggerMap = this.triggerMap.bind(this)
  this.onEdit = this.onEdit.bind(this)
  this.handleUpdate = this.handleUpdate.bind(this)
  this.handleUpdateChange = this.handleUpdateChange.bind(this)
  this.handleDelete = this.handleDelete.bind(this)
  this.handleLogout = this.handleLogout.bind(this)
}

  onEdit(currentUser){
    this.setState({
      isEdit: !this.state.isEdit,
      currentUser: {
        email: currentUser.email,
        name: currentUser.name,
        id: currentUser.id
      }
    })
  }

  async handleUpdate(e){
    e.preventDefault();
    const {currentUser} = this.state
    const data = currentUser
    await updateUser(currentUser.id, data);
    this.setState({
      isEdit: false
    })
  }

  async handleDelete(e) {
  e.preventDefault();
  const {currentUser} = this.state
  await deleteUser(currentUser.id);
  this.props.history.push(`/`)
}

async handleLogout(){
  this.props.history.push(`/`)
}

async handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      },
    }));
  }

  async handleUpdateChange(e) {
      const { name, value } = e.target;
      this.setState(prevState => ({
        currentUser: {
          ...prevState.currentUser,
          [name]: value
        },
      }));
    }

  async handleRegister(e) {
    e.preventDefault();
    const data = await registerUser(this.state.formData)
    this.setState({
      formData: {
        email: '',
        password_diagest: '',
        name: ''
      }
    })
    const id = data.id;
    const dataUser = await getUser(id);
    this.setState({
      currentUser: dataUser
    })
    this.props.history.push('/trigger');
  };

  async handleLogin(e) {
    e.preventDefault();
    const data = await loginUser(this.state.formData)
    console.log(data)
    // data === '' ? alert('Invalid Email or Password- try again') :
      this.setState(prevState => ({
      formData: {
        email: '',
        password_diagest: ''
      },
    }))
    const id = data.id;
    const dataUser = await getUser(id);
    this.setState({
      currentUser: dataUser
    })
    this.props.history.push('/trigger');
  }

  triggerMap(e){
  e.preventDefault();
  this.props.history.push('/map')
  }

async componentDidMount(){
}

  render() {
    return (
      <div className="App">

      <div>
        <nav>
          <h3>i.contact app</h3>
          <Link to='/login'> returning eye </Link>
          <Link to='/register'> new eye </Link>
        </nav>

      <Route exact path='/' component={HomeScreen} />

        <div className='secondNav'>
          <h3>i.contact app</h3>
          {this.state.isEdit ?
            <UpdateForm handleChange={this.handleUpdateChange}
              currentUser={this.state.currentUser} handleUpdate={this.handleUpdate}/>
                : <h2>hey {this.state.currentUser.name}</h2>}
            <button onClick={() => this.onEdit(this.state.currentUser)}>Edit profile </button>
            <button onClick={this.handleDelete}>Delete profile </button>
            <button onClick={this.handleLogout}>Logout</button>
        </div>


        <Route exact path='/login' render={(props) => (
          <LoginForm
            {...props}
            buttonText="start humanizing"
            handleChange={this.handleChange}
            email={this.state.formData.email}
            password={this.state.formData.password_diagest}
            handleSubmit={this.handleLogin}
            onSubmit={this.handleLogin}
          />
        )}/>

        <Route exact path='/register' render={(props) => (
        <RegisterForm
          {...props}
          buttonText="start humanizing"
          handleChange={this.handleChange}
          email={this.state.formData.email}
          password={this.state.formData.password_diagest}
          name={this.state.formData.name}
          handleSubmit={this.handleRegister}
        />
      )}/>

        <Route exact path='/trigger' component={() => < TriggerMap
        triggerMap={this.triggerMap} />
        }/>

        <Route exact path='/map' component={MapContainer}/>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
