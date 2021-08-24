import axios from 'axios';

const deezerApi = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/',
});

export default deezerApi;