import { ACTION_TYPES } from './actionTypes';
import deezerApi from '../../services/deezerApi'; 
import { mockedMusicData } from '../../helpers/mockedMusicData';

export const ACTIONS = {
  getBestMusics: () => {
    return ((dispatch) => {
      deezerApi.get('chart/0/tracks?limit=10')
        .then(({ data }) => dispatch(ACTIONS.bestMusics(data.data)))
        .catch(() => dispatch(ACTIONS.bestMusics(mockedMusicData)));
    })
  },
  bestMusics: (data) => ({
    type: ACTION_TYPES.BEST_MUSICS,
    payload: data,
  }),
  addToFavoritesMusics: (track) => ({
    type: ACTION_TYPES.ADD_TO_FAVORITES_MUSICS,
    payload: track,
  }),
  removeFromFavoritesMusics: (track) => ({
    type: ACTION_TYPES.REMOVE_FAVORITE_MUSIC,
    payload: track,
  }),
  addToFavoritesAlbums: (album) => ({
    type: ACTION_TYPES.ADD_TO_FAVORITES_ALBUMS,
    payload: album,
  }),
  removeFromFavoritesAlbums: (album) => ({
    type: ACTION_TYPES.REMOVE_FAVORITE_ALBUM,
    payload: album,
  }),
  addToFavoritesArtists: (artist) => ({
    type: ACTION_TYPES.ADD_TO_FAVORITES_ARTISTS,
    payload: artist,
  }),
  removeFromFavoritesArtists: (artist) => ({
    type: ACTION_TYPES.REMOVE_FAVORITE_ARTIST,
    payload: artist,
  }),
  playTrack: (track) => ({
    type: ACTION_TYPES.PLAY_TRACK,
    payload: track,
  }),
  localStorageFavorites: ([localStorageFavorites, collection]) => ({
    type: ACTION_TYPES[`${collection.toUpperCase()}_TO_LOCAL_STORAGE`],
    payload: localStorageFavorites,
  }),
  filterTracks: (term) => ({
    type: ACTION_TYPES.FILTER_TRACKS,
    payload: term,
  }),
  filterAlbums: (term) => ({
    type: ACTION_TYPES.FILTER_ALBUMS,
    payload: term,
  }),
  filterArtists: (term) => ({
    type: ACTION_TYPES.FILTER_ARTISTS,
    payload: term,
  }),
  getDataBySelect: ({ data, select }) => ({
    type: ACTION_TYPES[`FOUND_${select.toUpperCase()}S`],
    payload: data,
  }),
  toPlaylistAlbum: (album) => ({
    type: ACTION_TYPES.FETCH_ALBUM_PLAYLIST,
    payload: album,
  }),
  albumToPlaylist: (data) => ({
    type: ACTION_TYPES.ALBUM_TO_PLAYLIST,
    payload: data,
  }),
  toPlaylistArtist: (artist) => ({
    type: ACTION_TYPES.FETCH_ARTIST_PLAYLIST,
    payload: artist,
  }),
  artistToPlaylist: (data) => ({
    type: ACTION_TYPES.ARTIST_TO_PLAYLIST,
    payload: data,
  }),
  loadingToFalse: () => ({
    type: ACTION_TYPES.LOADING_TO_FALSE,
  }),
  getDataOnSearch: ({ select, term }) => {
    const endpoint = `search/${select}?q=${term}`;
    return ((dispatch) => {
      deezerApi.get(endpoint)
      .then(({ data }) => dispatch(ACTIONS.getDataBySelect({ data, select })))
      .catch((err) => console.log(err));
      /* .then(({ data }) => dispatch(bestMusics(data.data)))
      .catch(() => dispatch(getDataBySelect({ `mocked${select}Data`, select }))); */
    })
  },
  getAlbumPlaylist: (album) => {
    const endpoint = `${album.tracklist.replace('https://api.deezer.com/', '')}?limit=${album.nb_tracks}`
    return ((dispatch) => {
      deezerApi.get(endpoint)
      /* .then(({ data }) => console.log((data.data))) */
      .then(({ data }) => dispatch(ACTIONS.albumToPlaylist(data.data)))
      .catch((err) => console.log(err));
    })
  },
  getArtistPlaylist: (artist) => {
    const endpoint = `${artist.tracklist.replace('https://api.deezer.com/', '')}`
    return ((dispatch) => {
      deezerApi.get(endpoint)
      /* .then(({ data }) => console.log((data.data))) */
      .then(({ data }) => dispatch(ACTIONS.artistToPlaylist(data.data)))
      .catch((err) => console.log(err));
    })
  }
}
