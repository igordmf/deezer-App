import { BEST_MUSICS, ADD_TO_FAVORITES,
  REMOVE_FAVORITE, PLAY_TRACK,
  LOCAL_STORAGE_TO_FAVORITES, FILTER_TRACKS } from './actionTypes';
import deezerApi from '../../services/deezerApi'; 
import { mockedData } from '../../helpers/mockedData';

export const bestMusics = (data) => ({
  type: BEST_MUSICS,
  payload: data,
})

export function getBestMusics() {
  return ((dispatch) => {
    deezerApi.get('chart/0/tracks?limit=300')
      .then(({ data }) => dispatch(bestMusics(data.data)))
      .catch(() => dispatch(bestMusics(mockedData)));
  })
}

export const addToFavoritesMusics = (track) => ({
  type: ADD_TO_FAVORITES,
  payload: track,
})

export const removeFromFavorite = (track) => ({
  type: REMOVE_FAVORITE,
  payload: track,
})

export const playTrack = (track) => ({
  type: PLAY_TRACK,
  payload: track,
})

export const localStorageFavorites = (localStorageFavorites) => ({
  type: LOCAL_STORAGE_TO_FAVORITES,
  payload: localStorageFavorites,
})

export const filterTracks = (term) => ({
  type: FILTER_TRACKS,
  payload: term,
})
