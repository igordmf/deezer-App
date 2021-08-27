import axios from 'axios';

const deezerApi = axios.create({
  baseURL: 'https://cors-anywhere-srv.herokuapp.com/https://api.deezer.com/',
  /* headers: { 'X-Requested-With': 'XMLHttpRequest' }, */
});

export default deezerApi;