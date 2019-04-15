import axios from 'axios';
const GOOGLE_URL = 'https://maps.googleapis.com/maps'
const GOOGLE_API_KEY= process.env.REACT_APP_GOOGLE_API_KEY;

const BASE_URL = 'http://localhost:3000'

const api = axios.create({
  baseURL: BASE_URL
});

// async function fetchMap(){
//   try{
//     let map =  await axios(`${GOOGLE_URL}/api/js?key=${GOOGLE_API_KEY}&callback=initMap`);
//     return map.data;
//   }
//   catch(error){
//     console.log(error);
//   };
// };

const registerUser = async (data) => {
  try {
    const formData = await api.post(`${BASE_URL}/users`, {"user": data});
    return formData.data
  } catch (e) {
    console.log(e);
  }
}

const loginUser = async (data) => {
  try {
    const formData = await api.post(`${BASE_URL}/user_token/`, {"auth": data});
    return formData.data;
  } catch (e) {
    console.log(e);
  }
}

const getUser = async (id) => {
  const resp = await axios.get(`${BASE_URL}/users/${id}`)
  console.log(resp.data);
  return resp.data
}

const updateUser = async (id, data) => {
  console.log(id, data);
  const resp = await api.put(`/users/${id}/`, data);
  return resp.data;
}

const deleteUser = async (id) => {
  const resp = await axios.delete(`${BASE_URL}/users/${id}`);
  console.log(resp.data);
  return resp.data
}

const userLocation = async(data, userId) => {
  console.log('post from axios:', data);
  try{
  const resp = await api.post(`${BASE_URL}/users/${userId}/locations/`, {"location": data}, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return resp.data;
  } catch (e) {
  console.log(e);
  }
}

const getLocations = async() => {
  const resp = await api.get(`${BASE_URL}/locations/users`);
  console.log(resp.data);
  return resp.data
}

const createMeeting = async(data) => {
  console.log('posting meeting', createMeeting);
  const resp = await api.post(`${BASE_URL}/meetings`, {"meeting": data}, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return resp.data;
}

const updateMeeting = async(data) => {
  const resp = await api.put(`/meetings/${data.id}`, {"meeting": data}, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return resp.data;
}

const cancelMeeting = async(data) => {
  console.log('posting meeting', cancelMeeting);
  const resp = await api.post(`${BASE_URL}/meetings`, {"meeting": data}, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return resp.data;
}



export  {
  registerUser,
  loginUser,
  updateUser,
  getUser,
  deleteUser,
  userLocation,
  getLocations,
  createMeeting,
  cancelMeeting,
  updateMeeting
  }
