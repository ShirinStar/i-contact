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
    const formData = await api.post(`${BASE_URL}/users`, data);
    return formData.data
  } catch (e) {
    console.log(e);
  }
}

const loginUser = async (data) => {
  try {
    const formData = await api.post(`${BASE_URL}/users`, data);
    return formData.data;
  } catch (e) {
    console.log(e);
  }
}

export  {
  registerUser,
  loginUser
  }
