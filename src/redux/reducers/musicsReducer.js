import { BEST_MUSICS } from "../actions/actionTypes";

const INITIAL_STATE ={
  albums: [],
  artists: [],
  playlists: [],
  podcasts: [],
  tracks: [],
}

const musicsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEST_MUSICS:
      return {
        ...state,
        albums: action.payload.albums.data,
        artists: action.payload.artists.data,
        playlists: action.payload.playlists.data,
        podcasts: action.payload.podcasts.data,
        tracks: action.payload.tracks.data,
      }
    default:
      return state;
  }
};

export default musicsReducer;