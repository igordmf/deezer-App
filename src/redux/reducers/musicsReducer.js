import { BEST_MUSICS, PLAY_TRACK } from "../actions/actionTypes";

const INITIAL_STATE ={
  tracks: [],
  playingTrack: {preview: '', album: { cover: '', title: ''}},
}

const musicsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEST_MUSICS:
      return {
        ...state,
        tracks: action.payload,
      }
    case PLAY_TRACK:
      return {
        ...state,
        playingTrack: action.payload,
      }
    default:
      return state;
  }
};

export default musicsReducer;