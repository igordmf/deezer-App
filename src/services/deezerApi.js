import axios from 'axios';

const deezerApi = axios.create({
  baseURL: 'https://cors-anywhere-srv2-cd281ad979da.herokuapp.com/https://api.deezer.com/',
  //baseURL: 'https://cors-anywhere-srv.herokuapp.com/https://api.deezer.com/',
  // baseURL: 'https://cors-anywhere-eusrv.herokuapp.com/https://api.deezer.com/',
  /* headers: { 'X-Requested-With': 'XMLHttpRequest' }, */
});

export default deezerApi;
