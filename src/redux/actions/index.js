import { BEST_MUSICS, ADD_TO_FAVORITES_MUSICS,
  REMOVE_FAVORITE_MUSIC, PLAY_TRACK,
  TO_LOCAL_STORAGE, FILTER_TRACKS,
  FILTER_ALBUMS, FILTER_ARTISTS,
  ADD_TO_FAVORITES_ALBUMS, REMOVE_FAVORITE_ALBUM,
  ADD_TO_FAVORITES_ARTISTS, REMOVE_FAVORITE_ARTIST } from './actionTypes';
import deezerApi from '../../services/deezerApi'; 
import { mockedMusicData } from '../../helpers/mockedMusicData';

export const bestMusics = (data) => ({
  type: BEST_MUSICS,
  payload: data,
})

export function getBestMusics() {
  return ((dispatch) => {
    deezerApi.get('chart/0/tracks?limit=10')
      .then(({ data }) => dispatch(bestMusics(data.data)))
      .catch(() => dispatch(bestMusics(mockedMusicData)));
  })
}

export const addToFavoritesMusics = (track) => ({
  type: ADD_TO_FAVORITES_MUSICS,
  payload: track,
})

export const removeFromFavoritesMusics = (track) => ({
  type: REMOVE_FAVORITE_MUSIC,
  payload: track,
})

export const addToFavoritesAlbums = (album) => ({
  type: ADD_TO_FAVORITES_ALBUMS,
  payload: album,
})

export const removeFromFavoritesAlbums = (album) => ({
  type: REMOVE_FAVORITE_ALBUM,
  payload: album,
})

export const addToFavoritesArtists = (artist) => ({
  type: ADD_TO_FAVORITES_ARTISTS,
  payload: artist,
})

export const removeFromFavoritesArtists = (artist) => ({
  type: REMOVE_FAVORITE_ARTIST,
  payload: artist,
})

export const playTrack = (track) => ({
  type: PLAY_TRACK,
  payload: track,
})

export const localStorageFavorites = ([localStorageFavorites, collection]) => ({
  type: `${collection.toUpperCase()}_${TO_LOCAL_STORAGE}`,
  payload: localStorageFavorites,
})

export const filterTracks = (term) => ({
  type: FILTER_TRACKS,
  payload: term,
})

export const filterAlbums = (term) => ({
  type: FILTER_ALBUMS,
  payload: term,
})

export const filterArtists = (term) => ({
  type: FILTER_ARTISTS,
  payload: term,
})

export const getDataBySelect = ({ data, select }) => ({
  type: `FOUND_${select.toUpperCase()}S`,
  payload: data,
})

export function getDataOnSearch({ select, term }) {
  const endpoint = `search/${select}?q=${term}`;
  return ((dispatch) => {
    deezerApi.get(endpoint)
    .then(( { data }) => dispatch(getDataBySelect({ data, select })))
    .catch((err) => console.log(err));
      /* .then(({ data }) => dispatch(bestMusics(data.data)))
      .catch(() => dispatch(getDataBySelect({ `mocked${select}Data`, select }))); */
  })
}