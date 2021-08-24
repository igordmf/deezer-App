import axios from 'axios';

const deezerApi = axios.create({
  baseURL: 'https://api.deezer.com/',
});

export default deezerApi;