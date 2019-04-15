import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ActionCable from 'action-cable-react-jwt';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';
import {
  loginUser,
  registerUser,
  updateUser,
  getUser,
  deleteUser,
  createMeeting,
  userLocation
} from './services/api-helper';
import TriggerMap from './components/TriggerMap';
import HomeScreen from './components/HomeScreen';
import LoginForm from './components/LoginForm';
import UpdateForm from './components/UpdateForm';
import RegisterForm from './components/RegisterForm';
import MapContainer from './components/MapContainer';
import MeetingForm from './components/MeetingForm';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const GOOGLE_URL = 'https://maps.googleapis.com/maps'
const GOOGLE_API_KEY= process.env.REACT_APP_GOOGLE_API_KEY;
const BASE_URL = 'http://localhost:3000'
const api = axios.create({
  baseURL: BASE_URL
});
const sgeo = require('sgeo');
const Geo = require('geo-nearby');

class App extends Component {
  constructor() {
    super();
    this.state = {
      mapData: '',
      formData: {
        email: '',
        password: '',
        name: ''
      },
      currentUser: {
        email: '',
        name: '',
        id: '',
        token: ''
      },
      isMeeting:false,
      meetingPlaces:[],
      isEdit: false,
      isLogin: false,
      loggedInUser: null,
      mapUser: [],
      currentPosition: {lat: 40.7397803, lng: -73.9896464}
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
    this.grabLocationData = this.grabLocationData.bind(this)
    this.handleNo = this.handleNo.bind(this)
    this.handleYes = this.handleYes.bind(this)
  }

 grabLocationData(data){
   if(data.user.id === this.state.loggedInUser.id) {
     this.setState({
       currentPosition:{
         lat: data.lat,
         lng: data.lng
       }
     })
   }
   this.setState(prevState => ({
     mapUser: {
       ...prevState.mapUser,
       [data.user.id]: {
         lat: data.lat,
         lng: data.lng
       }
     }
   }))
 }

 handleNo(){
   this.setState({
   isMeeting:false
   })
  this.props.history.push(`/`)
 }

 async handleYes(){
   const nearPlace = async () => {
    const resp = await api.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.currentPosition.lat},${this.state.currentPosition.lng}&radius=250&key=${GOOGLE_API_KEY}`);
   return resp.data;
   console.log(resp.data);
 }
 const markNewPlace = await nearPlace();
   this.setState({
     meetingPlaces: markNewPlace
   })

  // const mapUserProp =  this.state.mapUser.filter((user, index)=> {
  //    const lng = this.state.mapUser.lng
  //    const lat = this.state.mapUser.lat })
  //  const p1 = new sgeo.latlon(this.state.currentPosition.lat, this.state.currentPosition.lng);
  //  const p2 = new sgeo.latlon(mapUserProp.lat, mapUserProp.lng);
  //  const mp = p1.midpointTo(p2);
  //  console.log(mp);

  // const data = {lat: this.state.currentPosition.lat,
  //               lon: this.state.currentPosition.lng}
  // const nearCurrent = new Geo(data).limit(1)
  // const newPlace = nearCurrent.nearBy(
  //   this.state.currentPosition.lat,
  //   this.state.currentPosition.lng, 250);
  // console.log(newPlace);
 }

  onEdit(currentUser) {
    this.setState({
      isEdit: !this.state.isEdit,
      currentUser: {
        email: currentUser.email,
        name: currentUser.name,
        id: currentUser.id,
        token: currentUser.token
      }
    })
  }

  async handleUpdate(e) {
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
    this.setState({
      isLogin: false,
      isMeeting:false
    })
    this.props.history.push(`/`)
  }

  async handleLogout() {
    localStorage.removeItem('token');
    this.setState({
      currentUser: {
        email: '',
        name: '',
        id: '',
        token: ''
      },
      isLogin: false,
      isMeeting:false
    })
    this.props.history.push(`/`)
  }

  async handleChange(e) {
    const {
      name,
      value
    } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      },
    }));
  }

  async handleUpdateChange(e) {
    const {
      name,
      value
    } = e.target;
    this.setState(prevState => ({
      currentUser: {
        ...prevState.currentUser,
        [name]: value
      },
    }));
  }

  async handleRegister(e) {
    e.preventDefault();
    await registerUser(this.state.formData);
    const token = await loginUser(this.state.formData);
    const data = decode(token.jwt);
    this.setState({
      loggedInUser: data,
      formData: {
        email: '',
        password: '',
        name: ''
      },
      isLogin:true
    })
    const id = data.id;
    const dataUser = await getUser(id);
    this.setState({
      currentUser: dataUser
    })
    this.props.history.push('/trigger');
    localStorage.setItem('token', token.jwt);
    this.createSocket();
  };

  async handleLogin(e) {
    e.preventDefault();
    const token = await loginUser(this.state.formData);
    const data = decode(token.jwt);
    console.log(data)
    // data === '' ? alert('Invalid Email or Password- try again') :
    this.setState(prevState => ({
      loggedInUser: data,
      formData: {
        email: '',
        password: ''
      },
      isLogin:true
    }))
    this.setState({
      currentUser: data
    })
    this.props.history.push('/trigger');
    localStorage.setItem('token', token.jwt);
    this.createSocket();
  }

  triggerMap(e) {
    e.preventDefault();
    this.props.history.push('/map')
  }

  async componentDidMount() {
    this.createSocket();
    const token = localStorage.getItem('token');
    if (token) {
      const loggedInUser = decode(token);
      this.setState({
        loggedInUser
      })
    }
  }

  async createSocket() {
    const socketToken = localStorage.getItem('token')
    if (socketToken) {
      let App = {}
      App.cable = ActionCable.createConsumer(`ws://localhost:3000/cable`, socketToken);
      const subscription = App.cable.subscriptions.create({
        channel: 'LocationsChannel'
      },
      {
        connected: () => {
          console.log("cable: connected")
        },
        disconnected: () => {
          console.log("cable: disconnected")
        },
        received: (data) => {
          this.grabLocationData(data)
            console.log("cable received: ", data);
          }
      })

      const meetingSubscription = App.cable.subscriptions.create({
        channel: 'MeetingsChannel'
      },
      {
        connected: () => {
          console.log("meeting cable: connected")
        },
        disconnected: () => {
          console.log("meeting cable: disconnected")
        },
        received: (data) => {
          this.setState({
            isMeeting: true
          })
            console.log("start meeting!: ", data);
          }
      })
    }
  }

  render() {
    return ( <div className = "App">
      <div>
      {this.state.isLogin ?
      <div className = 'secondNav'>
      {this.state.isEdit ?
        <UpdateForm handleChange = {this.handleUpdateChange}
        currentUser = {this.state.currentUser}
        handleUpdate = {this.handleUpdate}/> :
        <h2 className='welcomeUser'> hey {this.state.currentUser.name} </h2>}
        <button className='editProfile' onClick = {() => this.onEdit(this.state.currentUser)}> Edit profile</button>
        <button className='deleteProfile' onClick = {this.handleDelete}> Delete profile </button>
        <button className='logout' onClick = {this.handleLogout}> Logout </button>
        </div> :
        <nav className='firstNav'>
          <h3 className='logo'> i.contact</h3>
          <Link to='/login' className='returningEye'> returning eye </Link>
          <Link to ='/register' className='newEye'> new eye </Link>
          </nav>}

        <Route exact path = '/' component = {HomeScreen}/>

        <Route exact path = '/login'
          render = {(props) => (
            <LoginForm
            {...props}
            buttonText = "start humanizing"
            handleChange = {this.handleChange}
            email = {this.state.formData.email}
            password = {this.state.formData.password}
            handleSubmit = {this.handleLogin}
            onSubmit = {this.handleLogin}
            />
          )}
        />
        <Route exact path = '/register'
          render = {(props) => ( <
            RegisterForm
            {...props}
            buttonText = "start humanizing"
            handleChange = {this.handleChange}
            email = {this.state.formData.email}
            password = {this.state.formData.password}
            name = {this.state.formData.name}
            handleSubmit = {this.handleRegister}
            />
          )}
        />

        {this.state.isMeeting ?
          <MeetingForm
        currentUser={this.state.currentUser}
        handleYes={this.handleYes}
        handleNo={this.handleNo}
        /> : ''}

        <Route exact path = '/trigger'
        component = {() =>
          <TriggerMap triggerMap = {this.triggerMap}/>}
        />
        <Route exact path = '/map'
            component = {() =>
           <MapContainer
           currentUser={this.state.loggedInUser}
           currentPosition={this.state.currentPosition}
           mapUser={this.state.mapUser}
           meetingPlaces={this.state.meetingPlaces}
           />
          }/>
          </div>
        </div>
      );
    }
  }

  export default withRouter(App);
