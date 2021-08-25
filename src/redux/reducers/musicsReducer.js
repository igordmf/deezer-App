import { BEST_MUSICS, PLAY_TRACK, FILTER_TRACKS } from "../actions/actionTypes";

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
          track.title.toLowerCase().includes(action.payload.toLowerCase())
          ||
          track.artist.name.toLowerCase().includes(action.payload.toLowerCase())
          ||
          track.album.title.toLowerCase().includes(action.payload.toLowerCase())
          )})],
      };
    default:
      return state;
  }
};

export default musicsReducer;