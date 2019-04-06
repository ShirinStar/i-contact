import axios from 'axios';
const BASE_URL = 'https://maps.googleapis.com/maps'
const GOOGLE_API_KEY= process.env.REACT_APP_GOOGLE_API_KEY;

async function fetchMap(){
  try{
    let map =  await axios(`${BASE_URL}/api/js?key=${GOOGLE_API_KEY}&callback=initMap`);
    return map.data;
  }
  catch(error){
    console.log(error);
  };
};

export default fetchMap
