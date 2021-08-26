import { BEST_MUSICS, PLAY_TRACK, FILTER_TRACKS } from "../actions/actionTypes";
import stringCompareWithRegex from '../../helpers/stringCompareWithRegex';

const INITIAL_STATE = {
  tracks: [],
  filtredTracks: [],
  playingTrack: {preview: '', album: { cover: '', title: ''}},
};

const musicsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEST_MUSICS:
      return {
        ...state,
        tracks: action.payload,
        filtredTracks: action.payload,
      };
    case PLAY_TRACK:
      return {
        ...state,
        playingTrack: action.payload,
      };
    case FILTER_TRACKS:
      return {
        ...state,
        filtredTracks: [...state.tracks.filter((track) => { 
          return (
            stringCompareWithRegex(track.title, action.payload)
            ||
            stringCompareWithRegex(track.artist.name, action.payload)
            ||
            stringCompareWithRegex(track.album.title, action.payload)
          )})],
      };
    default:
      return state;
  }
};

export default musicsReducer;