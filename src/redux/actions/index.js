import { BEST_MUSICS, FAVORITES_MUSICS } from './actionTypes';
import deezerApi from '../../services/deezerApi';

export const bestMusics = (data) => ({
  type: BEST_MUSICS,
  payload: data,
})

export function getBestMusics() {
  return (async (dispatch) => {
    const { data } = await deezerApi.get('chart/0');
    console.log(data);
    dispatch(bestMusics(data));
  })
}

export const addTofavoritesMusics = (track) => ({
  type: FAVORITES_MUSICS,
  payload: track,
})