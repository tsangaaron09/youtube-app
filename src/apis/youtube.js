import axios from 'axios';

const KEY = 'AIzaSyDAhv1U4X5NTqMgGDKzJtrF9ghLpgbCdR0';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});




