import { BEST_MUSICS, ADD_TO_FAVORITES_MUSICS,
  REMOVE_FAVORITE_MUSIC, PLAY_TRACK,
  TO_LOCAL_STORAGE, FILTER_TRACKS,
  FILTER_ALBUMS, FILTER_ARTISTS,
  ADD_TO_FAVORITES_ALBUMS, REMOVE_FAVORITE_ALBUM,
  ADD_TO_FAVORITES_ARTISTS, REMOVE_FAVORITE_ARTIST,
  ALBUM_TO_PLAYLIST, FETCH_ALBUM_PLAYLIST,
  ARTIST_TO_PLAYLIST, FETCH_ARTIST_PLAYLIST } from './actionTypes';
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

export const toPlaylistAlbum = (album) => ({
  type: FETCH_ALBUM_PLAYLIST,
  payload: album,
})

export const albumToPlaylist = (data) => ({
  type: ALBUM_TO_PLAYLIST,
  payload: data,
})

export const toPlaylistArtist = (artist) => ({
  type: FETCH_ARTIST_PLAYLIST,
  payload: artist,
})

export const artistToPlaylist = (data) => ({
  type: ARTIST_TO_PLAYLIST,
  payload: data,
})

export function getDataOnSearch({ select, term }) {
  const endpoint = `search/${select}?q=${term}`;
  return ((dispatch) => {
    deezerApi.get(endpoint)
    .then(({ data }) => dispatch(getDataBySelect({ data, select })))
    .catch((err) => console.log(err));
      /* .then(({ data }) => dispatch(bestMusics(data.data)))
      .catch(() => dispatch(getDataBySelect({ `mocked${select}Data`, select }))); */
  })
}

export function getAlbumPlaylist(album) {
  const endpoint = `${album.tracklist.replace('https://api.deezer.com/', '')}?limit=${album.nb_tracks}`
  return ((dispatch) => {
    deezerApi.get(endpoint)
    /* .then(({ data }) => console.log((data.data))) */
    .then(({ data }) => dispatch(albumToPlaylist(data.data)))
    .catch((err) => console.log(err));
  })
}

export function getArtistPlaylist(artist) {
  const endpoint = `${artist.tracklist.replace('https://api.deezer.com/', '')}`
  return ((dispatch) => {
    deezerApi.get(endpoint)
    /* .then(({ data }) => console.log((data.data))) */
    .then(({ data }) => dispatch(artistToPlaylist(data.data)))
    .catch((err) => console.log(err));
  })
}